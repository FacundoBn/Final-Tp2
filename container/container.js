import service from "../services/services.js";
import controller from "../controllers/controller.js";

const serviceInstance = new service()
const controllerInstance = new controller(serviceInstance)

export default controllerInstance