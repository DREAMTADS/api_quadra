import reservas from '../models/Reserva.js';

class ReservasController {
    static listarReservas = (req, res) => {
        reservas.find().populate('horarios')
        .exec((err, reservas) => {
            res.status(200).json(reservas);    
        })
    }

    static buscarHorariosPorId = (req, res) => {
        const id = req.params.id;
        reservas.findById(id)
        .populate('horarios')
        .exec((err, {horarios, nomeCliente}) => {
            if(err) {
                res.status(400).send({message: err.message});
            } else {
                res.status(200).json({horarios, nomeCliente});    
            }
        });
    }

    static buscarReservaPorId = (req, res) => {
        const id = req.params.id;
        
        reservas.findById(id, (err, reservas) => {
            if(err) {
                res.status(400).send({message: `${err.message} - falha ao encontrar Reserva`});
            } else {
                res.status(200).send(reservas);
            }
        });
    }

    static gerarReserva = (req, res) => {
        let reserva = new reservas(req.body);

        reserva.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha ao gerar Reserva`});
            } else {
                res.status(201).send(reserva.toJSON());
            }
        });
    }
}

export default ReservasController;