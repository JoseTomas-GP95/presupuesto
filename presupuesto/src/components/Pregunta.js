import React, { useState } from 'react';
import PropTypes from "prop-types";
import Error from './Error';

const Pregunta = ({ guardarPresupuesto, guardarRestante, actualizarPregunta }) => {

    const [cantidad, guardarCantidad] = useState(0);
const [error, guardarError] = useState(false);

const definirPresupuesto = e => {
    guardarCantidad(parseInt(e.target.value, 10))
}
//Validacion
const agregarPresupuesto = e => {
    e.preventDefault();

// En caso de errar en algo
    if(cantidad < 1 || isNaN( cantidad )) {
        guardarError(true)
        return;
    }

    // En el caso de pasar esa validación
    guardarError(false)
    //Al principio con lo que disponemos y el restante es el mismo
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad)
    actualizarPregunta(false)
}

    return (
        <div>
            {/* Aca le paso a error un mensaje especifico por props para que ese componente se reutilice con otros mensajes */}
            { error ?  <Error mensaje="El monto no es válido"/> : null}
            <h2>Agrega tu presupuesto</h2>
            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                    />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                />
            </form>
        </div>
    )
}
Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired
}
export default Pregunta;