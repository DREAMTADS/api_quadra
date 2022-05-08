import quadras from '../models/Quadra.js';

class QuadraController {
    static listarQuadras = (req, res) => {
        quadras.find((err, quadras) => {
            res.status(200).json(quadras);    
        }); 
    }

    static listarQuadraPorId = (req, res) => {
        const id = req.params.id;
        
        quadras.findById(id, (err, quadras) => {
            if(err) {
                res.status(400).send({message: `${err.message} - falha ao encontrar Quadra`});
            } else {
                res.status(200).send(quadras);
            }
        });
    }

    static cadastrarQuadra = (req, res) => {
        let quadra = new quadras(req.body);

        quadra.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar Quadra`});
            } else {
                res.status(201).send(quadra.toJSON());
            }
        });
    }
}

export default QuadraController;