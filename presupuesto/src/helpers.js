export const RevisarPresupuesto = (presupuesto, restante) => {
    let clase; 
 // El restante equivale a menos de 25%
    if((presupuesto / 4) > restante){
        clase = "alert alert-danger"
    } else if((presupuesto / 2) > restante) {
        clase = "alert alert-warning"
    } else {
        clase = "alert alert-success"
    }
    return clase;
}