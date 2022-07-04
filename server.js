const express = require("express");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();

// connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "Booker King",
    password: "Adventstar789*",
    database: "election",
  },
  console.log("Connected to the election database. ")
);

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db.query(`SELECT * FROM candidates`, (err, rows) => {
  console.log(rows);
});

// default response for any other request (NOT FOUND)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
