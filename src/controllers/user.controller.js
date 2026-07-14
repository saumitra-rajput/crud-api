const prisma = require("../config/prisma");

// Create User
exports.createUser = async (req, res) => {
    try {
        const { name, email } = req.body;

        const user = await prisma.user.create({
            data: {
                name,
                email
            }
        });

        res.status(201).json(user);

    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};

// Get All Users
exports.getUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany({
            orderBy: {
                id: "asc"
            }
        });

        res.json(users);

    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};

// Update User
exports.updateUser = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { name, email } = req.body;

        const user = await prisma.user.update({
            where: { id },
            data: { name, email }
        });

        res.json(user);

    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};

// Delete User
exports.deleteUser = async (req, res) => {
    try {
        const id = Number(req.params.id);

        await prisma.user.delete({
            where: { id }
        });

        res.json({
            message: "User deleted successfully"
        });

    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};
