class AuthController {


    login(req, res, next) {
        const data = req.body;

        res.status(200).json({ message: "Authorization successful!"});
    }
}

module.exports = AuthController;
