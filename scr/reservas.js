let reservas = [];
let siguienteId = 1;

function obtenerTodas() {
  return reservas;
}

function obtenerPorId(id) {
  return reservas.find(r => r.id === id);
}

function crear(datos) {
  const nueva = {
    id: siguienteId++,
    ...datos
  };

  reservas.push(nueva);

  return nueva;
}

function actualizar(id, datos) {
  const reserva = obtenerPorId(id);

  if (!reserva) return null;

  Object.assign(reserva, datos);

  return reserva;
}

function eliminar(id) {
  const indice = reservas.findIndex(r => r.id === id);

  if (indice === -1) return false;

  reservas.splice(indice, 1);

  return true;
}

module.exports = {
  obtenerTodas,
  obtenerPorId,
  crear,
  actualizar,
  eliminar
};