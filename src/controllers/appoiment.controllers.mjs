import appointmentModel from "../models/appoiment.models.mjs";

const createAppoiment =  async (req, res)=> {
    const inputData = req.body;
    //controla las excepciones de la consulta. 
    try {
        // antes de registrar verificar si es usuario existe
        const patienteFound = await appointmentModel.findOne({patient: inputData.patient});
        if (patienteFound){
            return res.status(404).json({msg: "el usuario ya existe"})
        }

        // paso 2: registrar al usarui
        const registeredAppoiment =  await appointmentModel.create(inputData);
        console.log(registeredAppoiment);
        res.status(201).json(registeredAppoiment);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({"msg": 'Error al registrar la cita'});
    }

}

const getAppoiment = (req, res)=> {
    res.send( 'Obtiene las citas')
}

const updateAppoiment  =(req, res)=> {
    res.send( 'Actualizacion de las citas')
}

const updateAllAppoiment = (req, res)=> {
    res.send( 'Actualizacion total de todas las citas')
}

const deleteAppoiment =  (req, res)=> {
    res.send( 'Elimina una cita')
}
// esta exportando las funcionalidas de este archvio usando el export 
export {
    createAppoiment, getAppoiment, updateAppoiment, updateAllAppoiment, deleteAppoiment
}