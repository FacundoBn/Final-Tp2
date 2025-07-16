class ServicioAlerta {
    sendProximityAlert(idVuelo, idOtro) {
      console.log(
        `Alerta: vuelos ${idVuelo} y ${idOtro} están a menos de 500 metros`
      );
    }
  }
  
  export default ServicioAlerta;
  