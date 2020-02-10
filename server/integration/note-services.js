const mongodb = require('mongodb');
const config = require('../config');

class NoteService {
  /**
   * Loads the user collection from MongoDB
   */
  static async loadUserCollection() {
    const client = await mongodb.MongoClient.connect(config.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    return client.db('utility-site').collection('users');
  }
  // Adds a note to the database
  static async SaveNote(newNote, username) {
    try {
      const userCollection = await this.loadUserCollection();
      const results = await userCollection.findOneAndUpdate({
        username,
      }, {
        $set: {
          note: newNote,
        }
      }, {
        upsert: false,
        new: true
      });
      if (!results.lastErrorObject.updatedExisting) {
        throw new Error('Note already exists. PATCH to update it instead.')
      }
    } catch (err) {
      if (err instanceof Error)
        throw err;
      console.log('Error in SaveNote: ', err);
      throw new Error('Database error');
    }
  }

  static async retrieveNote(username){
    try {
      const userCollection = await this.loadUserCollection();

      const foundNote = await userCollection.findOne({
        username
      }, {
        projection: {
          _id: 0,
          note: 1
        }
      });
      if (!foundNote) {
        return '';
      }
      return foundNote;
    } catch(err){
      console.log(err)
    }
  }
}

module.exports = NoteService;