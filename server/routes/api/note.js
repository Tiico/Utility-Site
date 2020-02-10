const express = require('express');
const router = express.Router();
const noteService = require('../../integration/note-services');

/**
 * POST: Add note to the database
 */
router.post('/', async (req, res) => {
  let username = req.body.username
  let note = req.body.note
  try {
    await noteService.SaveNote(note, username)
    return res.status(201).json({
      message: 'Note successfully saved!'
    });
  } catch (err) {
      return res.sendStatus(500);
  }
});

/**
 * GET: fetch note from the database
 */
router.get('/', async (req, res) => {
  let username = req.query.username
  try {
    let note = await noteService.retrieveNote(username)
    return res.status(200).json(note);
  } catch (err) {
      return res.sendStatus(500);
  }
});

module.exports = router;