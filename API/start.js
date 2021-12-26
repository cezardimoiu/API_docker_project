const express = require("express");

const app = express();
const { query } = require("./data.js");

app.use(express.json());

app.post("/api/medicine", async (req, res) => {
  const { med_name, quantity, med_description } = req.body;
  console.info(`Adding medicine with name ${med_name}, quantity ${quantity} and description ${med_description}`);

  const result = await query(
    "INSERT INTO medicine (med_name, quantity, med_description) VALUES ($1, $2, $3) RETURNING id",
    [med_name, quantity, med_description]
  );

  res.json({ id: result[0].id });
});

app.get("/api/medicine", async (req, res) => {
  console.info(`Getting all medicine`);

  const medicine = await query("SELECT * FROM medicine");
  res.json(medicine);
});

app.listen(80, () => {
  console.info(`Server started listening on port 80`);
});
