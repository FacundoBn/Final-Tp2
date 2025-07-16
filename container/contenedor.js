import ServicioVuelos   from "../services/servicioVuelos.js";
import ControladorVuelo from "../controllers/controladorVuelo.js";

const servicio   = new ServicioVuelos();
const controlador = new ControladorVuelo(servicio);

export default controlador;
