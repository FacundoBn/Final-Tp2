import express from "express";
import rutas   from "./routes/rutasVuelos.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/vuelos", rutas);

app.use((req, res) => {
  res.status(404).json({ errorMsg: "Ruta no encontrada" });
});

app.listen(8080, () => {
  console.log("Servidor escuchando en puerto 8080");
});
