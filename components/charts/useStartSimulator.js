import axios from "axios";
import React, { useEffect, useState } from "react";
import { URL, useSimState } from "../../store/SimProvider";


function useStartSimulator(duration) {
    const [toggleRunSimulator, setToggleRunSimulator] = useState(false)
    const {
        realtimeData,
        setRealtimeData,
        realtimeGlucose,
        setRealtimeGlucose,
        realtimeAdenine,
        setRealtimeAdenine,
        environment,
        setEnvironment,
        realtimeLysine,
        setRealtimeLysine,
        closeSSE,
        setCloseSSE,
        dataSSE,
        setDataSSE,
        finalData,
        setFinalData,
        run,
        setRun,
        glucose,
        adenine,
        lysine,
        adenineProducer,
        adenineCheater,
        lysineProducer,
        lysineCheater,
    } = useSimState();

    const media = {
        glucose,
        adenine,
        lysine,
    };

    const population = {
        adeop: 1,
        lysop: 1,
        adewt: 1,
        lyswt: 1,
        n_adeop: adenineProducer,
        n_lysop: lysineProducer,
        n_adewt: adenineCheater,
        n_lyswt: lysineCheater,
    };

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

    useEffect(() => {
        const payload = {
            population,
            media,
            run,
        };
        let sessionid = sessionStorage.getItem("sessionid");
        if (toggleRunSimulator) {
            axios
                .post(`${URL}/run/${sessionid}`, payload)
                .then((response) => {
                    const json = response.data;
                    json.responseData.map((data, i) => (data["time"] = i));
                    setFinalData(json.responseData);
                })
                .then(() => setToggleRunSimulator(!toggleRunSimulator));
        }
    }, [toggleRunSimulator]);

    /**
     *
     * @returns Array of Population Distribution with species names from arrays of arrays
     */
    const getPopulationDistribution = () => {
        const output = [];
        const iRef = Object.keys(population).splice(0, 4);
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

        setRealtimeAdenine(dataSSE && dataSSE["adenine"])
        setRealtimeLysine(dataSSE && dataSSE["lysine"])
        setRealtimeGlucose(dataSSE && dataSSE["glucose"])
        if (realtimeAdenine) {
            for (let i = 0; i < realtimeAdenine.length; i++) {
                setEnvironment([
                    ...environment,
                    {
                        glucose: realtimeGlucose[i],
                        adenine: realtimeAdenine[i],
                        lysine: realtimeLysine[i],
                    },
                ]);
            }
        }


        for (let i = 0; i < opArr.length; i++) {
            for (let j = 0; j < opArr[i].length; j++) {
                opObj[opArr[i][j]] = specs_count[i][j];
                setRealtimeData([...realtimeData, opObj]);
            }
        }
    }, [dataSSE]);

    return { realtimeData, environment, toggleRunSimulator, setToggleRunSimulator }

}




export default useStartSimulator