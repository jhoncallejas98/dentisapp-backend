import disponibilidadModel from "../schemas/disponibilidad.schemas.mjs";

const createDiponibilidad =async (req, res) => {
    const inputData = req.body;

    const data = await disponibilidadModel.create( inputData );
    res.status( 201 ).json( data );
}


//exponer cada funcionalidad definida en este archivo
export {
    createDiponibilidad
}
