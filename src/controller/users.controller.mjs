import userModel from "../schemas/User.schema.mjs";

const createUsers = async (req, res) => {
    const inputData = req.body;
    const data = await userModel.create( inputData );

        try {
        const registeredProduct = await userModelModel.create( inputData );

        console.log( registeredProduct );        // Imprime en la consula
        res.send( registeredProduct );           // Enviando la respuesta al cliente
    } 
    catch (error) {
        console.error( error );
        res.send( 'Error: No se pudo registrar el producto' );
    }
}

const getAllProducts = async (req, res) => {

    try {
        const data = await userModel.find({})
    res.json( data );
    }
    catch ( error ) {
        console.error( error );
        res.json ( {msg: "error: no se pudo optener el resultado de productos"})
    }
}

export {
    createUsers,
    getAllProducts
}