const createAppoiment =  (req, res)=> {
    const inputData = req.body;
    console.log(inputData)
    res.send(inputData)
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