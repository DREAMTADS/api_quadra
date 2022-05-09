import express from "express";
import quadras from './quadrasRoutes.js';
import reservas from './reservasRoutes.js';

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: 'Quadras'});
    });

    app.use(
        express.json(),
        quadras,
        reservas
    )
}

export default routes;