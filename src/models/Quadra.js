import mongoose from "mongoose";

const quadraSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        tipo: {type: String, required: true},
        coberta: {type: Boolean, required: true},
        bancos: {type: Boolean, required: true},
        arquibancada: {type: Boolean, required: true},
        bloqueada: {type: Boolean, required: true},
    }
)

const quadra = mongoose.model('quadras', quadraSchema);

export default quadra;