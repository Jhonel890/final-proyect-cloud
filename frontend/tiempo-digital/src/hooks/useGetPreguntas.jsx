import { useEffect, useState } from "react";
import { GET } from "../utils/methods";

export default function useGetPreguntas() {

    const [preguntas, setPreguntas] = useState([]);
    
    useEffect(() => {
        const fetchPerfiles = async () => {
            try {
                const response = await GET("/inquietud");
                setPreguntas(response.data);
            } catch (error) {
                console.error("Error obteniendo perfiles:", error);
            }
        };
        fetchPerfiles();
    }, []);
    return preguntas;
}
