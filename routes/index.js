// routes/index.js
const express = require('express');
const router = express.Router();
const horaMiddleware = require('../middlewares/horaMiddleware');

router.use(horaMiddleware);  // Zorg ervoor dat de tijd beschikbaar is voor deze route

router.get('/', (req, res) => {
  const currentHour = res.locals.currentTime;
  const mensaje = req.query.mensaje || '';

  res.render('index', {
    currentHour,
    mensaje
  });
});

module.exports = router;
