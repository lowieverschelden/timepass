// routes/endroute.js
const express = require('express');
const router = express.Router();
const horaMiddleware = require('../middlewares/horaMiddleware');
const validarHora = require('../middlewares/validarHora');

router.use(horaMiddleware);  // Zorg ervoor dat de tijd beschikbaar is voor deze route
router.use(validarHora);  // Controleer of de tijd tussen 12:00 en 24:00 is

router.get('/', (req, res) => {
  res.send('Welkom op de endroute! Je hebt toegang gekregen.');
});

module.exports = router;
