import mongoose from "mongoose";

const historiaCLinica = new mongoose.Schema({
    "name": {
        type: String,
        trim: true,
        required: true
    }
},

{
    timestamps: true,
    versionKey: false
}
);

const historiaClinicaModel = mongoose.model(
    'historias-clinicas',
    historiaCLinica
)

export default historiaClinicaModel;