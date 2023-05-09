import axios from "axios";
import React, { useEffect, useState } from "react";
import { URL, useSimState } from "../../store/SimProvider";
import { TRANSFER_P_RATE } from "../dashboard/constants";

const env = process.env.NODE_ENV || "development";

function useStartSimulator(toggleRunSimulator, setToggleRunSimulator) {
    // const [toggleRunSimulator, setToggleRunSimulator] = useState(false)
    const [realtimeData, setRealtimeData] = useState([]);
    const {
        environment,
        setEnvironment,
        closeSSE,
        dataSSE,
        setDataSSE,
        glucose,
        adenine,
        lysine,
        adenineProducer,
        adenineCheater,
        lysineProducer,
        lysineCheater,
        species,
        days, realtimeCount, setRealtimeCount, setFinalResponse
    } = useSimState();

    const dataPoints = days * 26;
    const initPop = new Array(dataPoints);
    const [initialPopulation, setInitialPopulation] = useState(initPop);

    const media = {
        glucose,
        adenine,
        lysine,
    };

    const population = {
        adeop: species.adeop,
        lysop: species.lysop,
        adewt: species.adewt,
        lyswt: species.lyswt,
        n_adeop: adenineProducer,
        n_lysop: lysineProducer,
        n_adewt: adenineCheater,
        n_lyswt: lysineCheater,
    };

    useEffect(() => {
        setInitialPopulation(initPop);
    }, [days]);


    useEffect(() => {
        let sessionid = sessionStorage.getItem("sessionid");
        const sse = new EventSource(`${URL}/${sessionid}/stream`);

        function handleStream(data) {
            try {
                const parsedJSON = JSON.parse(data.replaceAll(`'`, `"`));
                if (parsedJSON) {
                    setDataSSE(parsedJSON);
                }
            } catch {
                console.log("population >>EMPTY RESPONSE");
            }
        }

        if (toggleRunSimulator) {
            sse.onmessage = (e) => {
                setRealtimeCount(prev => prev + 1)
                handleStream(e.data);
            };
        } else {
            sse.close();
        }

        sse.onerror = (e) => {
            sse.close();
        };

        if (closeSSE) {
            sse.close();
        }

        return () => {
            sse.close();
        };
    }, [closeSSE, toggleRunSimulator]);

    // API call to run simulator
    useEffect(() => {
        const payload = {
            population,
            media,
            run: { "days": days, "transfer_p": TRANSFER_P_RATE },
        };
        let sessionid = sessionStorage.getItem("sessionid");
        if (toggleRunSimulator) {
            axios
                .post(`${URL}/run/${sessionid}`, payload)
                .then((res) => {
                    setFinalResponse(res.data.responseData)
                    setToggleRunSimulator(!toggleRunSimulator)
                })
        }
    }, [toggleRunSimulator]);

    /**
     *
     * @returns Array of Population Distribution with species names from arrays of arrays
     */
    const getPopulationDistribution = () => {
        const output = [];
        const iRef = Object.keys(population).splice(0, 4);
        console.log(realtimeData.length)
        for (let i of iRef) {
            if (population[i] > 1) {
                for (let j = 0; j < population[i]; j++) output.push(`${i}${j + 1}`);
            } else {
                output.push(i);
            }
        }
        return output;
    };

    useEffect(() => {
        const populationDistribution = getPopulationDistribution();
        const specs_distribution = dataSSE && dataSSE["population"] && dataSSE["population"].map((s) => s[0]);
        const specs_count = dataSSE && dataSSE["population"] && dataSSE["population"].map((s) => s[1]);
        const opArr = specs_distribution
            ? specs_distribution.map((s) =>
                s.map((i) => populationDistribution[i - 1])
            )
            : [];
        const opObj = {};


        const initialDistribution = {};
        for (let j = 0; j < populationDistribution.length; j++) {
            initialDistribution[populationDistribution[j]] = 1;
        }


        for (let i = 0; i < opArr.length; i++) {
            for (let j = 0; j < opArr[i].length; j++) {
                opObj[opArr[i][j]] = specs_count[i][j];
                setRealtimeData([...realtimeData, opObj]);
            }
        }


        if (realtimeCount === 0) {
            setInitialPopulation(prev => prev.fill(initialDistribution))
        } else {
            if (opObj['adeop1'] == 0 || opObj['lysop1'] == 0 || opObj['adeop'] == 0) {
                setInitialPopulation(prev => prev.map((p, i) => i === realtimeCount ? realtimeData[realtimeData.length - 2] : p))
            } else {

                setInitialPopulation(prev => prev.map((p, i) => i === realtimeCount ? opObj : p))
            }
        }



        if (dataSSE["adenine"] || dataSSE["glucose"] || dataSSE["lysine"]) {
            for (let i = 0; i < dataSSE["adenine"].length; i++) {
                setEnvironment([
                    ...environment,
                    {
                        glucose: dataSSE["glucose"][i],
                        adenine: dataSSE["adenine"][i],
                        lysine: dataSSE["lysine"][i],
                    },
                ]);
            }
        }

        // console.log(initialPopulation)

    }, [dataSSE, days]);

    return { realtimeData, setRealtimeData, setDataSSE, initialPopulation, setInitialPopulation, environment, toggleRunSimulator, setToggleRunSimulator, initialPopulation }

}




export default useStartSimulator