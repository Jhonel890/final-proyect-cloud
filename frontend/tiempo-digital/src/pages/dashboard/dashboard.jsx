import React from "react";
import CompleteProfileModal from "../components/modalPerfil/modalPerfil";
import useProfileCompletion from "../../hooks/useProfileCompletion";
import "./styles.css";

const Dashboard = () => {
  const { showModal, setShowModal, handleProfileSubmit } = useProfileCompletion();

  return (
    <div>
      <h2>Página Dashboard</h2>
      <p>Bienvenido a la página Dashboard de la aplicación.</p>
      {showModal && (
        <CompleteProfileModal
          onClose={() => setShowModal(false)}
          onSubmit={handleProfileSubmit}
        />
      )}
    </div>
  );
};

export default Dashboard;
