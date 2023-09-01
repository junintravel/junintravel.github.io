// Función para agregar un plan al formulario
function agregarPlan() {
    const nombrePlan = document.getElementById('nombrePlan').value;
    const fechaPlan = document.getElementById('fechaPlan').value;
    const descripcionPlan = document.getElementById('descripcionPlan').value;
    
    if (nombrePlan && fechaPlan && descripcionPlan) {
        // Crea un nuevo elemento de lista con los detalles del plan
        const nuevoPlan = document.createElement('li');
        nuevoPlan.innerHTML = `<strong>${nombrePlan}</strong><br>Fecha: ${fechaPlan}<br>${descripcionPlan}`;
        
        // Agrega el nuevo plan a la lista de planes
        const listaPlanes = document.getElementById('listaPlanes');
        listaPlanes.appendChild(nuevoPlan);
        
        // Limpia los campos del formulario
        document.getElementById('nombrePlan').value = '';
        document.getElementById('fechaPlan').value = '';
        document.getElementById('descripcionPlan').value = '';
    } else {
        alert('Por favor, complete todos los campos del formulario.');
    }
}

// Aquí puedes agregar más funciones para gestionar otras interacciones si es necesario

