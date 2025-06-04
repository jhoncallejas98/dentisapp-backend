import formulacionMedicaModel from "../schemas/formulacion-medica.eschema.mjs";

const createFormulacionMedica = async ( req, res ) => {
    const inputData = req.body

    const data = await formulacionMedicaModel( inputData );
    res.status( 201 ).json( data )
};

export{
    createFormulacionMedica
}