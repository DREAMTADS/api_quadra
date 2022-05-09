import horarios from '../models/Horario.js';

class HorariosController {
    static buscarHorarioPorId = (req, res) => {
        const id = req.params.id;
        
        horarios.findById(id, (err, horarios) => {
            if(err) {
                res.status(400).send({message: `${err.message} - falha ao encontrar Horari`});
            } else {
                res.status(200).send(horarios);
            }
        });
    }

    static gerarHorarios = (req, res) => {
        let horario = new horarios(req.body);

        horario.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha ao gerar horarios`});
            } else {
                res.status(201).send(horario.toJSON());
            }
        });
    }
}

export default HorariosController;