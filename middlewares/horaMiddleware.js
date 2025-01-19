const horaMiddleware = (req, res, next) => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    res.locals.currentTime = currentHour;
    next();
}

module.exports = horaMiddleware;