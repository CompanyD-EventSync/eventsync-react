/*
exports.adminOnly = (req, res, next) => {
    if (req.user?.role !== "ADMIN") {
        return res.status(403).json({ message: "Forbidden: Admins only" });
    }
    next();
};
*/

exports.adminOnly = (req, res, next) => {
    if (req.user?.role !== "ADMIN") {
        return res.status(403).json({ message: "Forbidden: Admins only" });
    }
    next();
};
