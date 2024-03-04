// Función para generar una fortuna aleatoria
function generarFortuna() {
    const fortunas = [
        "Hoy es un buen día para tomar decisiones importantes.",
        "Debes prestar atención a tu salud en los próximos días.",
        "Tu creatividad estará en su punto más alto esta semana.",
        "Se presentarán oportunidades inesperadas en tu camino."
        // Agrega más fortunas aquí
    ];
    const indice = Math.floor(Math.random() * fortunas.length);
    return fortunas[indice];
}

// Función para obtener el signo del horóscopo según el mes
function obtenerSigno(mes) {
    const signos = {
        enero: "♑ Capricornio",
        febrero: "♒ Acuario",
        marzo: "♓ Piscis",
        abril: "♈ Aries",
        mayo: "♉ Tauro",
        junio: "♊ Géminis",
        julio: "♋ Cáncer",
        agosto: "♌ Leo",
        septiembre: "♍ Virgo",
        octubre: "♎ Libra",
        noviembre: "♏ Escorpio",
        diciembre: "♐ Sagitario"
    };
    return signos[mes.toLowerCase()] || "Mes no válido";
}

// Obtener el mes de nacimiento del usuario
const mesDeNacimiento = "agosto"; // Aquí puedes cambiar el mes de nacimiento

// Obtener el signo y la fortuna
const signo = obtenerSigno(mesDeNacimiento.toLowerCase()); // Convertir a minúsculas
const fortuna = generarFortuna();

// Imprimir el signo y la fortuna
console.log(`Tu signo del horóscopo es ${signo}`);
console.log(`Tu fortuna para hoy es: ${fortuna}`);
