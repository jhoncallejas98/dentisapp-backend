import historiaClinicaModel from "../../schemas/historia-clinica.schemas.mjs";

const createHistoriaClinica = async ( req, res ) => {
    const inputData = req.body;

    try {
        const registeredHistoriaClinica = await historiaClinicaModel.create( inputData );

    console.log( registeredHistoriaClinica );
    res.send( registeredHistoriaClinica );
    }
    
    catch(error){
        console.log(error)
        res.json({ msg: 'Error de registro' })
    }
    }

    const deleteHistoriaClinica = async ( req, res ) => {
        const historiaClinicaId = req.params.id;
        const data = await historiaClinicaModel.findByIdAndDelete( historiaClinicaId )
    try{
        if( ! data ) {
            retun.res.json({ msg: 'La historia no se encuentrs registrada' })
        }

            res.json( data )
        }
        catch( error ){
            console.error( error );
            res.json({ msg: 'Error: No se pudo eliminar la historia clinica' })
        }
    }
    
export { 
    createHistoriaClinica,
    deleteHistoriaClinica
}