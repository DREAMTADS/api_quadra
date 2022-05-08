import mongoose from "mongoose";

const horairoSchema = new mongoose.Schema(
    {
        id: {type: String},
        horaInicio: {type: Date, required: true},
        horaTermino: {type: Date, required: true},
        reserva: {type: mongoose.Schema.Type.ObjectId, ref: 'reserva', required: true},
    }
)

const horairo = mongoose.model('autores', horairoSchema);

export default horairo;