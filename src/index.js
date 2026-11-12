require("dotenv").config();

const express = require("express");
//const usersRouter = require("./routes/users");
const booksRouter = require("./routes/books");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
//app.use("/api/users", usersRouter);

app.use("/api/books", booksRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
