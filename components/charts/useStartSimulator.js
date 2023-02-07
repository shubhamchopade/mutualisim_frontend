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
        let sessionid = sessionStorage.getItem("sessionid");
        const sse = new EventSource(`${URL}/${sessionid}/glucose`);

        function handleStream(data) {
            try {
                const parsedJSON = JSON.parse(data.replaceAll(`'`, `"`));
                // console.log("glucose >>", parsedJSON);
                if (parsedJSON.length !== 0) {
                    setRealtimeGlucose(parsedJSON);
                }
            } catch {
                console.log("glucose >> EMPTY RESPONSE");
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
        let sessionid = sessionStorage.getItem("sessionid");
        const sse = new EventSource(`${URL}/${sessionid}/adenine`);

        function handleStream(data) {
            try {
                const parsedJSON = JSON.parse(data.replaceAll(`'`, `"`));
                // console.log("adenine >>", parsedJSON);
                if (parsedJSON.length !== 0) {
                    setRealtimeAdenine(parsedJSON);
                }
            } catch {
                console.log("adenine >> EMPTY RESPONSE");
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
        let sessionid = sessionStorage.getItem("sessionid");
        const sse = new EventSource(`${URL}/${sessionid}/lysine`);

        function handleStream(data) {
            try {
                const parsedJSON = JSON.parse(data.replaceAll(`'`, `"`));
                // console.log("lysine >>", parsedJSON);
                if (parsedJSON.length > 0) {
                    setRealtimeLysine(parsedJSON);
                }
            } catch {
                console.log("lysine >> EMPTY RESPONSE");
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
        const minLen = Math.min(
            realtimeAdenine.length,
            realtimeGlucose.length,
            realtimeLysine.length
        );

        for (let i = 0; i < minLen; i++) {
            setEnvironment([
                ...environment,
                {
                    glucose: realtimeGlucose[i],
                    adenine: realtimeAdenine[i],
                    lysine: realtimeLysine[i],
                },
            ]);
        }
    }, [realtimeAdenine, realtimeLysine, realtimeGlucose]);

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
        const specs_distribution = dataSSE && dataSSE.map((s) => s[0]);
        const specs_count = dataSSE && dataSSE.map((s) => s[1]);
        const opArr = specs_distribution
            ? specs_distribution.map((s) =>
                s.map((i) => populationDistribution[i - 1])
            )
            : [];
        const opObj = {};

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