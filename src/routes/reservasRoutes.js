import express from "express";
import ReservasController from '../controllers/reservasController.js';

const router = express.Router();

router
    .get('/reservas', ReservasController.listarReservas)
    .get('/reservas/horarios/:quadra', ReservasController.buscarHorariosPorId)
    .get('/reservas/:id', ReservasController.buscarReservaPorId)
    .post('/reservas', ReservasController.gerarReserva)

export default router;