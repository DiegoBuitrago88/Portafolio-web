async function mostrarMensaje(mensajes) {
    const mensajeAleatorio = mensajes[Math.floor(Math.random() * mensajes.length)];
    const result = await Swal.fire({
        title: mensajeAleatorio,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, ver portafolio"
    });

    return result.isConfirmed;
}

async function mostrarAlerta() {
    const resultadoInicial = await Swal.fire({
        title: "Portafolio",
        text: "¡Hola! ¿Cómo estás? ¿Quieres ver mi portafolio?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, ver portafolio"
    });

    if (!resultadoInicial.isConfirmed) {
        let opcion = false;
        while (!opcion) {
            const mensajes = [
                '¡Oh no! ¿Realmente quieres perderte esto?',
                '¡Vamos, dale una oportunidad!',
                '¿Seguro que quieres decir que no?',
                '¡Estás a solo un clic de la diversión!',
                '¡Piénsalo de nuevo! Esto podría sorprenderte.',
                '¿De verdad quieres perder la oportunidad de ver mi trabajo?',
                '¡No te preocupes, no te morderé! Haz clic para descubrir más.',
                '¿En serio? ¿No quieres echarle un vistazo?',
                '¡Tu curiosidad te lo agradecerá!',
                '¡Haz clic y descubre algo increíble!',
                '¡No seas falso!',
            ];

            opcion = await mostrarMensaje(mensajes);
        }
    }
}

mostrarAlerta();



document.addEventListener("DOMContentLoaded", function () {
    const projectsList = document.getElementById("projects-list");

    const projectsData = [
        {
            "title": "Proyecto 1",
            "image": "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg",
            "description": "Proyecto bisiesto",
            "link": "https://github.com/DiegoBuitrago88/bisiesto"
        },
        {
            "title": "Proyecto 2",
            "image": "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg",
            "description": "Arreglo de registros",
            "link": "https://github.com/DiegoBuitrago88/arregloRegistros"
        },
        {
            "title": "Proyecto 3",
            "image": "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg",
            "description": "Proyecto de imc",
            "link": "https://github.com/DiegoBuitrago88/imc"
        },
        {
            "title": "Proyecto 4",
            "image": "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg",
            "description": "Parqueadero",
            "link": "https://github.com/DiegoBuitrago88/parqueadero"
        },
        {
            "title": "Proyecto 5",
            "image": "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg",
            "description": "Factura",
            "link": "https://github.com/DiegoBuitrago88/factura"
        },
        {
            "title": "Proyecto 6",
            "image": "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg",
            "description": "Calculadora",
            "link": "https://github.com/DiegoBuitrago88/CALCULADORA"
        },
    ];

    projectsData.forEach(project => {
        const projectElement = createProjectElement(project);
        projectsList.appendChild(projectElement);
    });

    function createProjectElement(project) {
        const projectDiv = document.createElement("div");
        projectDiv.className = "project";

        const projectImage = document.createElement("img");
        projectImage.src = project.image;
        projectImage.alt = project.title;

        const projectTitle = document.createElement("h3");
        projectTitle.textContent = project.title;

        const projectDescription = document.createElement("p");
        projectDescription.textContent = project.description;

        const projectLink = document.createElement("a");
        projectLink.href = project.link;
        projectLink.textContent = "Ver más";

        projectDiv.appendChild(projectImage);
        projectDiv.appendChild(projectTitle);
        projectDiv.appendChild(projectDescription);
        projectDiv.appendChild(projectLink);

        return projectDiv;
    }
});