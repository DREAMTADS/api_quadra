import express from "express";
import HorariosController from '../controllers/horariosController.js';

const router = express.Router();

router
    .get('/horarios/:id', HorariosController.buscarHorarioPorId)
    .post('/horarios', HorariosController.gerarHorarios)

export default router;