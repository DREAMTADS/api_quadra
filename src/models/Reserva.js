import mongoose from "mongoose";

const gradeHorariaSchema = new mongoose.Schema({
    dia: Date,
    inicio: Date,
    fim: Date
})

const reservaSchema = new mongoose.Schema(
    {
        id: {type: String},
        nomeCliente: {type: String, required: true},
        cpf: {type: String, required: true},
        pago: {type: Boolean, required: true},
        horarios: {type: gradeHorariaSchema, required: true},
        quadra: {type: mongoose.Schema.Types.ObjectId, ref: 'quadras', required: true},
    }
)

const reserva = mongoose.model('reservas', reservaSchema);

export default reserva;