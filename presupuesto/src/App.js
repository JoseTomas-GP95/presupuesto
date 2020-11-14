/* --------------------------------- IMPORTS -------------------------------- */
import React, { useState, useEffect } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControPresupuesto";

function App() {
  /* --------------------------------- STATES -------------------------------- */
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [CrearGasto, guardarCrearGasto] = useState(false);

  useEffect(() => {
    // Agrega el presupuesto
    if (CrearGasto) {
      guardarGastos([...gastos, gasto]);
    }
    // Se resta a medida que se gaste
    const total = restante - gasto.cantidad;
    guardarRestante(total);

    // Volver a false de nuevo
    guardarCrearGasto(false);
  }, [gasto]);

  return (
    <div className="container">
      <header>
        <h1>Gasto de la Semana</h1>
        <div className="contenido-principal contenido">
          {/* IMPLEMENTANDO CARGA CONDICIONAL DE COMPONENTES */}
          {mostrarpregunta ? (
            <Pregunta
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              actualizarPregunta={actualizarPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario
                  guardarGasto={guardarGasto}
                  guardarCrearGasto={guardarCrearGasto}
                />
              </div>

              <div className="one-half column">
                <Listado gastos={gastos} />
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}
export default App;
