import mongoose from "mongoose";

const reservaSchema = new mongoose.Schema(
    {
        id: {type: String},
        nomeCliente: {type: String, required: true},
        cpf: {type: String, required: true},
        pago: {type: Boolean, required: true},
        quadra: {type: mongoose.Schema.Type.ObjectId, ref: 'quadras', required: true},
    }
)

const reserva = mongoose.model('autores', reservaSchema);

export default reserva;