const jwt = require('jsonwebtoken');
const JWT_SECRET = 'your_secret_key';

module.exports.verifyToken = (req, res, next) => {
    const token = req.cookies.token;

    if (token) {
        try {
            const decoded = jwt.verify(token, JWT_SECRET);
            req.user = decoded; // Attach the decoded user information to req.user
        } catch (err) {
            console.error("Invalid token:", err.message);
            res.clearCookie('token');
        }
    }

    next(); // Continue to the next middleware or route handler
};
