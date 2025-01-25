'use strict';

const { Model } = require('sequelize');
const { persona, inquietud, respuesta } = require('../models');
const {inquietudSchema} = require('../schemas/schemas');
const uuid = require('uuid');


class InquietudControl {
    async listar(req, res) {
        try {
            const lista = await inquietud.findAll({
                attributes: ['titulo', 'descripcion', 'imagen', 'video', 'estado', 'external_id'],
                include: {model: respuesta, as: 'respuestas', attributes: ['descripcion', 'external_id']}
            });
            res.status(200).json({ message: "Éxito", code: 200, data: lista });
        } catch (error) {
            res.status(500).json({ message: "Error interno del servidor", code: 500, error: error.message });
        }
    }

    async obtener(req, res) {
        try {
            const result = await inquietud.findOne({
                where: {
                    external_id: req.params.external
                },
                attributes: ['titulo', 'descripcion', 'imagen', 'video', 'estado', 'external_id'],
                include: {model: respuesta, as: 'respuestas', attributes: ['descripcion', 'external_id']}
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
        const safeBody = inquietudSchema.safeParse(req.body);

        if (safeBody.error) {
            res.status(400);
            return res.json({ message: safeBody.error, tag: "Datos incorrectos", code: 400 });
            
        } else {
            const data = { ...safeBody.data };

            const personaA = await persona.findOne({
                where: { external_id: req.body.persona },
            });

            if (!personaA) {
                res.status(404).json({ message: "ERROR", tag: "Persona no encontrada", code: 404 });
            }

            data.id_persona = personaA.id;
            
            const result = await inquietud.create(data);
            if (!result) {
                res.status(401).json({ message: "ERROR", tag: "No se puede crear", code: 401 });
            } else {
                res.status(200).json({ message: "EXITO", code: 200 });
            }
        }
    }

    async modificar(req, res) {
        try {
            const safeBody = inquietudSchema.safeParse(req.body);
            if (safeBody.error) {
                res.status(400).json({ message: safeBody.error, tag: "Datos incorrectos", code: 400 });
            } else {
                const data = safeBody.data;
                const result = await inquietud.update(data, {
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

        } catch (error) {
            res.status(500).json({ message: "Error interno del servidor", code: 500, error: error.message });
        }
    }
}

module.exports = InquietudControl;