const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Create or connect to SQLite database
const dbPath = path.resolve(__dirname, '../database/bird_history.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) console.error('Error opening database:', err.message);
  else {
    console.log('Connected to SQLite database.');
    // Initialize the bird_history table
    db.run(
      `CREATE TABLE IF NOT EXISTS bird_history (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        bird_name TEXT,
        detection_time DATETIME DEFAULT CURRENT_TIMESTAMP
      )`
    );
  }
});

module.exports = db;
