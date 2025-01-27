import React from "react";
import { useNavigate } from "react-router-dom";

const TareasPendientes = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.pageContainer}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.sectionTitle}>Tareas Pendientes</h1>
        <button style={styles.backButton} onClick={() => navigate('/principal')}>
          Volver a Principal
        </button>
      </div>

      {/* Tareas Section */}
      <div style={styles.gridContainer}>
        {tareas.map((tarea, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.cardContent}>
              <h2 style={styles.cardTitle}>{tarea.titulo}</h2>
              <p style={styles.cardDescription}>{tarea.descripcion}</p>
              <div style={styles.buttonContainer}>
                <button style={styles.outlineButton}>Ver detalles</button>
                <button style={styles.primaryButton}>Marcar como completada</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const tareas = [
  {
    titulo: "Revisar reporte mensual",
    descripcion: "Analizar los datos del reporte mensual y preparar una presentación para el equipo.",
  },
  {
    titulo: "Actualizar sistema operativo",
    descripcion: "Realizar la actualización del sistema operativo en los equipos de la oficina.",
  },
  {
    titulo: "Resolver tickets pendientes",
    descripcion: "Atender los tickets de soporte que quedaron abiertos la semana pasada.",
  },
];

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
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
  },
  card: {
    backgroundColor: "white",
    border: "1px solid #e5e7eb",
    borderRadius: "0.375rem",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
  },
  cardContent: {
    padding: "1.5rem",
  },
  cardTitle: {
    fontSize: "1.125rem",
    fontWeight: "600",
    marginBottom: "0.75rem",
  },
  cardDescription: {
    fontSize: "0.875rem",
    color: "#6b7280",
    marginBottom: "1.25rem",
  },
  buttonContainer: {
    display: "flex",
    gap: "0.75rem",
  },
  outlineButton: {
    flex: 1,
    padding: "0.5rem",
    border: "1px solid #d1d5db",
    borderRadius: "0.375rem",
    backgroundColor: "white",
    color: "#1f2937",
    cursor: "pointer",
    transition: "background-color 0.3s",
    ':hover': {
      backgroundColor: "#f3f4f6",
    },
  },
  primaryButton: {
    flex: 1,
    padding: "0.5rem",
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

export default TareasPendientes;
