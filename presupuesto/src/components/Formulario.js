import React, { useState } from "react";
import shortid from "shortid";
import PropTypes from "prop-types";
import Error from "./Error";

const Formulario = ({ guardarGasto, guardarCrearGasto }) => {
  /* --------------------------------- STATES --------------------------------- */
  const [nombre, guardarNombre] = useState("");
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  /* ----------------------------- FUNCTION SUBMIT ---------------------------- */
  const submit = (e) => {
    e.preventDefault();

    // VALIDAR
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
      guardarError(true);
      return;
    }
    // Remueve el mensaje de error
    guardarError(false);

    const gastos = {
      id: shortid.generate(),
      nombre,
      cantidad,
    };
    // Seccion de gastos
    guardarGasto(gastos);
    guardarCrearGasto(true)

    // FORMULARIO VACIO
    guardarNombre("");
    guardarCantidad(0);
  };

  return (
    <form onSubmit={submit}>
      <h2>Agregar tus gastos</h2>
      {error ? <Error mensaje="Necesitas llenar correctamente todo" /> : null}
      <div className="campo">
        <label>Nombre Gasto</label>
        <input
          onChange={(e) => guardarNombre(e.target.value)}
          type="text"
          className="u-full-width"
          placeholder="Compras Supermercado"
          value={nombre}
        />
      </div>

      <div className="campo">
        <label>Cantidad Gasto</label>
        <input
          onChange={(e) => guardarCantidad(parseInt(e.target.value, 10))}
          type="number"
          className="u-full-width"
          placeholder="500"
          value={cantidad}
        />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>
  );
};
Formulario.propTypes = {
  guardarGasto: PropTypes.func.isRequired,
  guardarCrearGasto: PropTypes.func.isRequired
}

export default Formulario;
