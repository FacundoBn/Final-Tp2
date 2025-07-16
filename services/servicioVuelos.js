import RepositorioVuelo from "./repositorioVuelo.js";
import ServicioAlerta  from "./servicioAlerta.js";

class ServicioVuelos {
  constructor() {
    this.repositorio  = new RepositorioVuelo();
    this.alertService = new ServicioAlerta();
  }

  getAll() {
    return this.repositorio.getAll();
  }

  createOrUpdate({ id, xa, ya, za }) {
    
    const vuelo = this.repositorio.saveOrUpdate({ id, xa, ya, za });

    const todos = this.repositorio.getAll();

    if (todos.length < 2) {
      return { vuelo, colisiones: [] };
    }

    const colisiones = [];
    for (const otro of todos) {
      if (otro.id === id) continue;
      const distancia = Math.sqrt(
        (vuelo.xa - otro.xa) ** 2 +
        (vuelo.ya - otro.ya) ** 2 +
        (vuelo.za - otro.za) ** 2
      );
      if (distancia < 500) {
        colisiones.push(otro.id);
        this.alertService.sendProximityAlert(id, otro.id);
      }
    }

    return { vuelo, colisiones };
  }
}

export default ServicioVuelos;
