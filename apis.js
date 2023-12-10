// Asumiendo que cada sección tiene su propio archivo JSON, aquí está un ejemplo para la sección de introducción

document.addEventListener("DOMContentLoaded", function () {
    // URL del archivo JSON
    const jsonUrl = "file/info.json";
  
    // Realizar la solicitud Fetch
    fetch(jsonUrl)
      .then((response) => response.json())
      .then((data) => {
        // Manipular la información obtenida del JSON
        updateIntroductionSection(data);
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  });
  
  function updateIntroductionSection(data) {
    // Actualizar la sección de introducción con la información del JSON
    const addressElement = document.querySelector(".intro span.smaller");
    const salonNameElement = document.querySelector(".intro span.big");
    const taglineElement = document.querySelector(".intro span.small");
  
    addressElement.textContent = data.address;
    salonNameElement.textContent = data.salonName;
    taglineElement.textContent = data.tagline;
  }
  