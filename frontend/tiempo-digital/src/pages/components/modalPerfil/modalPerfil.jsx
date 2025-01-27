import React, { useState } from "react";
import "./styles.css";

const CompleteProfileModal = ({ onClose, onSubmit }) => {
  const [occupation, setOccupation] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ tipo_perfil: occupation, descripcion: description });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h1>Crear Perfil</h1>
        <form onSubmit={handleSubmit}>
          <p>¿Cuáles son tu habilidades u ocupaciones?</p>
          <div className="radio-group">
            {[
              "Profesor",
              "Cocinero",
              "Informático",
              "Médico",
              "Ingeniero",
              "Artista",
              "Abogado",
              "Arquitecto",
              "Contador",
              "Psicólogo",
            ].map((option) => (
              <label key={option}>
                <input
                  type="radio"
                  value={option}
                  checked={occupation === option}
                  onChange={() => setOccupation(option)}
                />
                {option}
              </label>
            ))}
          </div>
          <p id="descriptionp">Danos alguna descripción breve de ti:</p>
          <textarea
            className="txt-area"
            placeholder="Añade una descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="buttons">
            <button type="submit" className="btn">Guardar</button>
            <button type="button" className="btn btn-cancel" onClick={onClose}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompleteProfileModal;
