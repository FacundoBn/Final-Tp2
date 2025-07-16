class ControladorVuelo {
    constructor(servicio) {
      this.servicio = servicio;
    }
  
    getAll = (req, res) => {
      const vuelos = this.servicio.getAll();
      res.status(200).json(vuelos);
    };
  
    createOrUpdate = (req, res) => {
      try {
        const { id, xa, ya, za } = req.body;
        const { vuelo, colisiones } =
          this.servicio.createOrUpdate({ id, xa, ya, za });
        res.status(200).json({ ...vuelo, colisiones });
      } catch (err) {
        res.status(400).json({ errorMsg: err.message });
      }
    };
  }
  
  export default ControladorVuelo;
  