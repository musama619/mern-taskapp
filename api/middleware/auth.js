const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

const auth = async (req, res, next) => {
    // verify authentication
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ error: "Token required" });
    }

    const token = authorization.split(" ")[1];

    try {
        const { _id } = jwt.verify(token, process.env.SECRET);
        req.user = await User.findOne({ _id }).select("_id");
        next();
    } catch (error) {
        console.log("error", error);
        res.status(401).json({ error: "request is not authorized" });
    }
};

module.exports = auth;
