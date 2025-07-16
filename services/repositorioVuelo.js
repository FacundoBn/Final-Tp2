class RepositorioVuelo {
    constructor() {
      this.data = [];
    }
  
    getAll() {
      return [...this.data];
    }
  
    getById(id) {
      return this.data.find(v => v.id === id);
    }
  
    saveOrUpdate({ id, xa, ya, za }) {
      const existente = this.getById(id);
      if (existente) {
        existente.xa = xa;
        existente.ya = ya;
        existente.za = za;
        return existente;
      }
      const nuevoVuelo = { id, xa, ya, za };
      this.data.push(nuevoVuelo);
      return nuevoVuelo;
    }
  }
  
  export default RepositorioVuelo;
  