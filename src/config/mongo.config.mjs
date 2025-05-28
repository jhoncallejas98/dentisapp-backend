import mongoose from "mongoose";
// define una funcion asincrona para definir la configuracion del ODM Mongoose para usar MongoDB
async function dbConnect() {
    try {
        await mongoose.connect('mongodb+srv://silvamateo:1028401361@cluster0.8gq7clq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {}); // conectamis la base de datos y retorna la promesa
            console.log('Base de datos conectada correctamente')
    } catch (error) {
        console.log(error);
        console.error('Error al conectarse a la base de datos')
    }

}

// mongoose.connect('mongodb://127.0.0.1:27017/db-dentisapp')
//     .then(() => {console.log('Conected!')})
//     .catch(()=> {
//         console.log('Error')
//     });

export default dbConnect;
