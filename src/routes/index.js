import express from "express";
import quadras from './quadrasRoutes.js';

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: 'Quadras'});
    });

    app.use(
        express.json(),
        quadras
    )
}

export default routes;