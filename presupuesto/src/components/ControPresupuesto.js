import React from "react";
import PropTypes from "prop-types";
import { RevisarPresupuesto } from "../helpers"

const ControlPresupuesto = ({ presupuesto, restante }) => {
    return(
<div>
    <div className="alert alert-primary">
        Presupuesto: $ {presupuesto}
    </div>
    <div className={RevisarPresupuesto(presupuesto, restante)}>
        Restante: $ {restante}
    </div>
</div>
    )
}
ControlPresupuesto.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired,
}

export default ControlPresupuesto;