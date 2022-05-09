import mongoose from "mongoose";

const gradeHorariaSchema = new mongoose.Schema({
    inicio: Date,
    fim: Date
})

const horairoSchema = new mongoose.Schema(
    {
        id: {type: String},
        horarios: {type: [gradeHorariaSchema], required: true},
        quadra: {type: mongoose.Schema.Type.ObjectId, ref: 'quadras', required: true},
    }
)

const horairo = mongoose.model('horarios', horairoSchema);

export default horairo;