import { connection } from "../db/connection.js";

export const verClima = async (req, res) => {
  try {
    const result = await connection.execute("SELECT * FROM Clima");
    res.json(result.rows);
  } catch (error) {
    console.log(error);
  }
};

export const agregarClima = async (req, res) => {
  try {
    const { id, temperatura, humedad, descripcion } = req.body;
    const result = await connection.execute({
      sql: "INSERT INTO Clima (id, temperatura, humedad, descripcion ) VALUES (?, ?, ?, ?)",
      args: [id, temperatura, humedad, descripcion],
    });
    if (result.rowsAffected > 0) {
      res.json({ id, temperatura, humedad, descripcion });
    } else {
      res.send("An error!");
    }
  } catch (error) {
    console.log(error);
  }
};

export const algo = async (req, res) => {
  await connection.execute("DELETE FROM Clima");
  res.send("Ready");
};
