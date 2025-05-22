// definir la estructura de datos del documento
import mongoose from "mongoose";

// Define el esquema 
const appoimentSchema =  new mongoose.Schema(
    { // define la estructura de datos del documento
    name: {
        type: String,
        trim: true,
        required: true,
    },
    document: {
        type: String,
        rim: true,
        required: true
    },
    phoneNumber: {
        type: Number,
        trim: true,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        trim: true,
        required: true
    },
    specialty: {
        type: String,
        required: true
    },
    doctor: {
        type: String,
        trim: true,
        required: true
    },
    status: {
        type: String,
        emum: [ 'ASISTIO', 'PENDIENTE', 'CANCELADA' ],
        required: true
    },
},
// la configuracion del esquema o estructura de datos. 
{ 
    timestamps: true, // agrega las propiedades de createdAt (fehca de creacion y acutalizacion del documento)
    versionKey: false // eliminar la propiedad __v (cntador de modificaciones de schema)
});

// definimos el modelo: vincular el esquema  a una coleccion especifica. 

const appoimentModel = mongoose.model('appoiment', appoimentSchema);

// exponemos el modelo para ser usado por cualquier otro archivo en mi aplicacion. 
export default appoimentModel;