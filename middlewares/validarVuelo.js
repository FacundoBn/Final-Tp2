const idRegex = /^[A-Za-z]{3}\d{3}$/;

const validarVuelo = (req, res, next) => {
  const { id, xa, ya, za } = req.body;

  if (!id || xa == null || ya == null || za == null) {
    return res.status(400).json({ errorMsg: "datos no válidos" });
  }

  if (typeof id !== "string" || !idRegex.test(id)) {
    return res.status(400).json({ errorMsg: "datos no válidos" });
  }

  if (
    typeof xa !== "number" ||
    typeof ya !== "number" ||
    typeof za !== "number" ||
    !Number.isFinite(xa) ||
    !Number.isFinite(ya) ||
    !Number.isFinite(za)
  ) {
    return res.status(400).json({ errorMsg: "datos no válidos" });
  }

  next();
};

export default validarVuelo;
