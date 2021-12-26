const express = require("express");

const app = express();
const { query } = require("./data.js");

app.use(express.json());

app.post("/api/medicine", async (req, res) => {
  const { med_name, quantity, description } = req.body;
  console.info(`Adding medicine with name ${med_name}, quantity ${quantity}`);

  const result = await query(
    "INSERT INTO medicine (name, quantity) VALUES ($1, $2) RETURNING id",
    [med_name, quantity]
  );

  res.json({ id: result[0].id });
});

app.get("/api/medicine", async (req, res) => {
  console.info(`Getting all medicine`);

  const books = await query("SELECT * FROM medicine");
  res.json(books);
});

app.listen(80, () => {
  console.info(`Server started listening on port 80`);
});
