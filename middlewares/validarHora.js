const validarHora = (req, res, next) => {
    const currentHour = res.locals.currentTime;
  
    if (currentHour < 12) {
      res.locals.mensaje = 'Aún no son las 12 de la mañana';
      return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje));
    }
  
    next();
  };
  
  module.exports = validarHora;
  