import { useState, useEffect } from "react";
import { GET, POST } from "../utils/methods";
import { getExternalID, getToken } from "../utils/auth";

const useProfileCompletion = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const checkProfileCompletion = async () => {
      try {
        const idPersona = getExternalID();
        const response = await GET(`/persona/status/${idPersona}`, getToken());
        
        if (!response.status) {
          setShowModal(true);
        }
      } catch (error) {
        console.error("Error verificando el registro del perfil:", error);
      }
    };

    checkProfileCompletion();
  }, []);

  const handleProfileSubmit = async (profileData) => {
    try {
      const idPersona = getExternalID();
      const response = await POST(`/persona/status/change/${idPersona}`, profileData, getToken());
      console.log(response);
      if (response.code === 200) {
        setShowModal(false);
        alert({
            title: "Perfil completado",
            text: "Tu perfil ha sido completado exitosamente",
            icon: "success",
            confirmButtonText: "Aceptar",
        });
      } else {
        alert({
            title: "Error",
            text: response.tag,
            icon: "error",
            confirmButtonText: "Aceptar",
        });
      }
    } catch (error) {
      console.error("Error enviando datos del perfil:", error);
      alert({
            title: "Error",
            text: "Ocurrió un error al enviar los datos del perfil",
            icon: "error",
            confirmButtonText: "Aceptar",
      });
    }
  };

  return { showModal, setShowModal, handleProfileSubmit };
};

export default useProfileCompletion;
