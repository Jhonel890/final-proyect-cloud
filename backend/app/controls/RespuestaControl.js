'use strict';

const { inquietud, respuesta, persona } = require('../models');
const {respuestaSchema} = require('../schemas/schemas');
const uuid = require('uuid');

class RespuestaControl {
    async listar(req, res) {
        try {
            const lista = await respuesta.findAll({
                attributes: ['descripcion', 'imagen', 'video', 'estado', 'external_id'],
                include: [
                    { model: inquietud, as: 'inquietud', attributes: ['titulo', "descripcion"] },
                    { model: persona, as: 'persona', attributes: ['nombres', 'apellidos', 'external_id'] }
                ]
            });
            res.status(200).json({ message: "Éxito", code: 200, data: lista });
        } catch (error) {
            res.status(500).json({ message: "Error interno del servidor", code: 500, error: error.message });
        }
    }

    async obtener(req, res) {
        try {
            const result = await respuesta.findOne({
                where: {
                    external_id: req.params.external
                },
                attributes: ['descripcion', 'imagen', 'video', 'estado', 'external_id'],
                include: [
                    { model: inquietud, as: 'inquietud', attributes: ['titulo', "descripcion"] },
                    { model: persona, as: 'persona', attributes: ['nombres', 'apellidos', 'external_id'] }
                ]
            });
            if (!result) {
                res.status(404).json({ message: "ERROR", tag: "No encontrado", code: 404 });
            } else {
                res.status(200).json({ message: "EXITO", code: 200, data: result });
            }
        } catch (error) {
            res.status(500).json({ message: "Error interno del servidor", code: 500, error: error.message });
        }
    }

    async guardar(req, res) {
        const safeBody = respuestaSchema.safeParse(req.body);

        if (safeBody.error) {
            res.status(400);
            return res.json({ message: safeBody.error, tag: "Datos incorrectos", code: 400 });
            
        } else {
            const data = { ...safeBody.data };

            const inquietudA = await inquietud.findOne({
                where: { external_id: req.body.inquietud },
            });

            if (!inquietudA) {
                res.status(404).json({ message: "ERROR", tag: "Inquietud no encontrada", code: 404 });
            }

            const personaA = await persona.findOne({
                where: { external_id: req.body.persona },
            });

            if (!personaA) {
                res.status(404).json({ message: "ERROR", tag: "Persona no encontrada", code: 404 });
            }

            data.id_persona = personaA.id;
            

            data.id_inquietud = inquietudA.id;
            
            const result = await respuesta.create(data);
            if (!result) {
                res.status(401).json({ message: "ERROR", tag: "No se puede crear", code: 401 });
            } else {
                res.status(201).json({ message: "EXITO", code: 201});
            }
        }
    }

    async modificar(req, res) {
        const safeBody = respuestaSchema.safeParse(req.body);
        if (safeBody.error) {
            res.status(400).json({ message: safeBody.error, tag: "Datos incorrectos", code: 400 });
        } else {
            const data = safeBody.data;

            const personaA = await persona.findOne({
                where: { external_id: req.body.persona },
            });

            if (!personaA) {
                res.status(404).json({ message: "ERROR", tag: "Persona no encontrada", code: 404 });
            }

            data.id_persona = personaA.id;

            const result = await respuesta.update(data, {
                where: {
                    external_id: req.params.external
                }
            });
            
            if (!result) {
                res.status(401).json({ message: "ERROR", tag: "No se puede modificar", code: 401 });
            } else {
                res.status(200).json({ message: "EXITO", code: 200 });
            }
        }
    }

    async mis_respuestas(req, res) {
        try {
            const id_persona = req.params.persona;

            const personaA = await persona.findOne({
                where: { external_id: id_persona },
            });

            if (!personaA) {
                res.status(404).json({ message: "ERROR", tag: "Persona no encontrada", code: 404 });
            }

            const lista = await respuesta.findAll({
                where: { id_persona: personaA.id },
                attributes: ['descripcion', 'imagen', 'video', 'estado', 'external_id'],
                include: [
                    { model: inquietud, as: 'inquietud', attributes: ['titulo', "descripcion"] },
                    { model: persona, as: 'persona', attributes: ['nombres', 'apellidos', 'external_id'] }
                ]
            });
            res.status(200).json({ message: "Éxito", code: 200, data: lista });
        } catch (error) {
            res.status(500).json({ message: "Error interno del servidor", code: 500, error: error.message });
        }
    }
}

module.exports = RespuestaControl;