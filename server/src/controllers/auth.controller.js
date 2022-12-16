const AuthService = require("../services/auth.services");

class AuthController {
    authService = new AuthService();

    async login(req, res, next) {
        const data = req.body;
    
        try {
            const { token, user } = await this.authService.login(data);
            res.status(200).json({ token, user, message: "Authorization successful!" });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = AuthController;
