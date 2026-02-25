/* LOGICA DE GALERIA DINÁMICA - LUPITA PONCE
   Este script controla la apertura de modales y la carga de imágenes 
   según el tipo de sesión seleccionada.
*/

// 1. BASE DE DATOS DE IMÁGENES
// Instrucciones: Agrega aquí los nombres de los archivos que guardes en assets/img/
const galeriaData = {
    parejas: [
        'pareja1.png', 
        'pareja2.png', 
        'pareja3.png'
 
    ],
    maternidad: [
        'maternidad1.png',
        'maternidad2.png',
        'maternidad3.png'
    ],
    smash: [
        'smash1.png',
        'smash2.png',
        'smash3.png'
    ],
    familiares: [
        'familiares1.png',
        'familiares2.png',
        'familiares3.png'
    ],
    deportiva: [
        'deportiva1.png',
        'deportiva2.png',
        'deportiva3.png'
    ],
    empresarial: [
        'empresarial1.png',
        'empresarial2.png',
        'empresarial3.png'
    ],
    casual: [
        'casual1.png',
        'casual2.png',
        'casual3.png'
    ],
    tematicas: [
        'tematicas1.png',
        'tematicas2.png',
        'tematicas3.png'
    ],
    social: [
        'social1.png',
        'social2.png',
        'social3.png'
    ]
};

// 2. SELECCIÓN DE ELEMENTOS DEL DOM
const modal = document.getElementById("modal-galeria");
const contenedorFotos = document.getElementById("galeria-fotos");
const tituloModal = document.getElementById("modal-titulo");
const botonesCerrar = document.querySelectorAll(".close-modal");
const tarjetasServicio = document.querySelectorAll(".open-modal");

// 3. FUNCIÓN PARA ABRIR GALERÍA
// ... (Toda tu parte de galeriaData se queda igual) ...

// 3. FUNCIÓN PARA ABRIR GALERÍA
tarjetasServicio.forEach(tarjeta => {
    tarjeta.addEventListener("click", () => {
        const tipoSesion = tarjeta.getAttribute("data-session");
        const nombreSesion = tarjeta.querySelector("h3").innerText;

        tituloModal.innerText = `Galería: ${nombreSesion}`;
        contenedorFotos.innerHTML = "";

        const fotos = galeriaData[tipoSesion];

        if (fotos && fotos.length > 0) {
            fotos.forEach(archivo => {
                const img = document.createElement("img");
                img.src = `assets/img/${archivo}`;
                img.alt = `Fotografía de ${nombreSesion} - Lupita Ponce`;
                
                // --- SUGERENCIA 1: LAZY LOADING ---
                img.setAttribute("loading", "lazy"); 
                
                contenedorFotos.appendChild(img);
            });
        } else {
            contenedorFotos.innerHTML = `
                <div style="grid-column: 1/-1; padding: 50px; opacity: 0.5;">
                    <p>Estamos seleccionando las mejores capturas para esta categoría.</p>
                    <small>Próximamente...</small>
                </div>
            `;
        }

        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    });
});

// --- SUGERENCIA 2: CERRAR AL HACER CLICK AFUERA ---
window.addEventListener("click", (e) => {
    // Si el usuario hace click en el fondo del modal (el overlay negro)
    if (e.target === modal) {
        cerrarModal();
    }
});

// EXTRA: Cerrar con la tecla Escape (por si están en compu)
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        cerrarModal();
    }
});

const cerrarModal = () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
};

botonesCerrar.forEach(boton => {
    boton.addEventListener("click", cerrarModal);
});

// Cerrar si hacen click fuera del contenido (en el fondo oscuro)
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        cerrarModal();
    }
});

// Cerrar con la tecla Escape
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "block") {
        cerrarModal();
    }
});