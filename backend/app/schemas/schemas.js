const zod = require('zod');

const cuentaSchema = zod.object({
    correo: zod.string().email(),
    clave: zod.string(),
    estado: zod.boolean().optional()
});

const personaSchema = zod.object({
    nombres: zod.string(),
    apellidos: zod.string(),
    direccion: zod.string().nullable(),
    cedula: zod.string(),
    monedas: zod.number().nullable().optional(),
    tipo_perfil: zod.enum([
        "Profesor",
        "Cocinero",
        "Informático",
        "Médico",
        "Ingeniero",
        "Artista",
        "Abogado",
        "Arquitecto",
        "Contador",
        "Psicólogo"
    ]),
    cuenta: cuentaSchema,
    rol: zod.string().uuid(),
});


const inquietudSchema = zod.object({
    titulo: zod.string(),
    descripcion: zod.string().nullable().optional(),
    imagen: zod.string().nullable().optional(),
    video: zod.string().nullable().optional(),
    estado: zod.boolean().optional(),
    persona: zod.string().uuid()
});

const respuestaSchema = zod.object({
    descripcion: zod.string(),
    imagen: zod.string().nullable().optional(),
    video: zod.string().nullable().optional(),
    estado: zod.boolean().optional(),
    inquietud: zod.string().uuid(),
    persona: zod.string().uuid()
});

const rolSchema = zod.object({
    nombre: zod.string()
});

module.exports = {
    cuentaSchema,
    personaSchema,
    inquietudSchema,
    respuestaSchema,
    rolSchema
};