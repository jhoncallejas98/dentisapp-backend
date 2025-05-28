import userModel from "../schemas/User.schema.mjs";

const createUsers = async (req, res) => {
    const inputData = req.body;
    const data = await userModel.create(inputData);

    try {
        const registeredProduct = await userModelModel.create(inputData);

        console.log(registeredProduct);        // Imprime en la consula
        res.send(registeredProduct);           // Enviando la respuesta al cliente
    }
    catch (error) {
        console.error(error);
        res.send('Error: No se pudo registrar el producto');
    }
}

const getAllUsers = async (req, res) => {

    try {
        const data = await userModel.find({})
        res.json(data);
    }
    catch (error) {
        console.error(error);
        res.json({ msg: "error: no se pudo optener el resultado de productos" })
    }
}

const getUsersById = async (req, res) => {
    const UsersId = req.params.id;
    try {
        const data = await userModel.findById(UsersId);

        if (!data) {
            return res.json({ msg: "el producto no se encuentra resgistrado" })
        }
        res.json(data);
    }
    catch (error) {
        console.error(error);
        res.json({ msg: "error: no se pudo encontrar el producto" })
    }
}

const removeUsersById = async (req, res) => {
    try {
    const productId = req.params.id;
    const data = await userModel.findByIdAndDelete(productId);
    if (!data) {
        return res.json({ msg: "el producto no se encuentra resgistrado" })
    }

    res.json(data);
    }

    catch (error) {
        console.error(error);
        res.json({ msg: "error: no se pudo encontrar el producto" })
    }
}

const updateUsersById = async (req, res) => {
    try {
    const usersId = req.params.id;
    const inputData = req.body;
    const data = await userModel.findByIdAndUpdate( usersId, inputData, {new:true}  );
    
    res.json( data );
    }
    catch ( error ) {
        console.error( error )
        res.json({msg: "no se pudo actualizar el usuario"})
    }
}

export {
    createUsers,
    getAllUsers,
    getUsersById,
    removeUsersById,
    updateUsersById
}