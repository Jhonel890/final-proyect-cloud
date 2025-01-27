import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CrearPregunta = () => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el guardado de la pregunta, por ejemplo, enviándola a un servidor o almacenándola en un estado global
    console.log("Pregunta Creada:", { titulo, descripcion });
    navigate('/preguntas'); // Redirigir a la página de preguntas (ajustar la ruta según tu aplicación)
  };

  return (
    <div style={styles.pageContainer}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.sectionTitle}>Crear Pregunta</h1>
        <button style={styles.backButton} onClick={() => navigate('/principal')}>
          Volver a Principal
        </button>
      </div>

      {/* Formulario de Creación de Pregunta */}
      <form onSubmit={handleSubmit} style={styles.formContainer}>
        <div style={styles.inputGroup}>
          <label htmlFor="titulo" style={styles.label}>Título de la Pregunta</label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="descripcion" style={styles.label}>Descripción</label>
          <textarea
            id="descripcion"
            name="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            style={styles.textarea}
            required
          />
        </div>

        <h1 style={styles.sectionTitle}>Se deben poner todos los tags o referencias de tu pregunta ej para cocineros</h1>
        

        <div style={styles.buttonContainer}>
          <button type="submit" style={styles.primaryButton}>Crear Pregunta</button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    padding: "2rem",
    backgroundColor: "#f3f4f6",
    color: "#1f2937",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "2rem",
  },
  sectionTitle: {
    fontSize: "1.5rem",
    fontWeight: "600",
  },
  backButton: {
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "0.375rem",
    backgroundColor: "#2563eb",
    color: "white",
    cursor: "pointer",
    transition: "background-color 0.3s",
    ':hover': {
      backgroundColor: "#1e40af",
    },
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontSize: "1rem",
    fontWeight: "500",
    marginBottom: "0.5rem",
  },
  input: {
    padding: "0.75rem",
    border: "1px solid #d1d5db",
    borderRadius: "0.375rem",
    fontSize: "1rem",
  },
  textarea: {
    padding: "0.75rem",
    border: "1px solid #d1d5db",
    borderRadius: "0.375rem",
    fontSize: "1rem",
    minHeight: "150px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  primaryButton: {
    padding: "0.75rem 1.5rem",
    border: "none",
    borderRadius: "0.375rem",
    backgroundColor: "#2563eb",
    color: "white",
    cursor: "pointer",
    transition: "background-color 0.3s",
    ':hover': {
      backgroundColor: "#1e40af",
    },
  },
};

export default CrearPregunta;
