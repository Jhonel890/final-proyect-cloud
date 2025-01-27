import { useEffect, useState } from "react";
import { GET } from "../utils/methods";
import { getExternalID } from "../utils/auth";

export default function useGetPreguntas(refetchTrigger) {
    const [preguntas, setPreguntas] = useState([]);

    useEffect(() => {
        const fetchPreguntas = async () => {
            try {
                const external_id = getExternalID();
                const response = await GET(`/inquietud/persona/${external_id}`);
                setPreguntas(response.data);
            } catch (error) {
                console.error("Error obteniendo preguntas:", error);
            }
        };
        fetchPreguntas();
    }, [refetchTrigger]);

    return preguntas;
}


export function useGetPregunta(external_id) {

    const [preguntas, setPreguntas] = useState([]);
    
    useEffect(() => {
        const fetchPerfiles = async () => {
            try {
                const response = await GET(`/inquietud/${external_id}`);
                setPreguntas(response.data);
            } catch (error) {
                console.error("Error obteniendo perfiles:", error);
            }
        };
        fetchPerfiles();
    });
    return preguntas;
}