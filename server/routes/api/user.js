  
const express = require('express');
const router = express.Router();
const userService = require('../../integration/user-services');

/**
 * POST: Add user to the database
 */
router.post('/', async (req, res) => {
  try {
    console.log(req.body)
    await userService.submitUser(req.body)
    return res.status(201).json({
      message: 'Account successfully created!'
    });
  } catch (err) {
      return res.sendStatus(500);
  }
});

module.exports = router;