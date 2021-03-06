const express = require('express');
const router = express.Router();
const fetch = require("node-fetch");
const config = require("../../config")

const API = config.WEATHER_API;

/**
 * GET: Get the current weather based on coordinates
 */
router.get('/', async (req, res) => {
  try {
    const lat = req.query.lat;
    const lon = req.query.lon;
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=${API}`
    fetch(url)
    .then(res => res.json())
    .then((data) => {
      res.json(data);
    })
    .catch(console.log)
  } catch (err) {
      return res.sendStatus(500);
  }
});

module.exports = router;