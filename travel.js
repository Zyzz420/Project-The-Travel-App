fetch('db.json')
  .then(response => response.json())
  .then(data => {
    console.log(data.destinations);
    // Use the retrieved data here
  })
  .catch(error => console.error(error));

// Wait for the DOM to load before accessing form element
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById("destination-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const continent = document.getElementById("continent").value;
    const things = document.getElementById("things").value;
    const degrees = document.getElementById("degrees").value;
    const activities = document.querySelectorAll(
      'input[name="activities"]:checked'
    );
    const rather = document.querySelector(
      'input[name="rather"]:checked'
    );
    const means = document.getElementById("means").value;
    const extra = document.getElementById("extra").value;

    let destination = "";

    switch (continent) {
      case "Africa":
        destination += "Africa.html";
        break;
      case "Asia":
        destination += "Asia.html";
        break;
      case "Europe":
        destination += "Europe.html";
        break;
      case "BikiniBottom":
        destination += "bikini_bottom.html";
        break;
    }

    destination += `?things=${things}&degrees=${degrees}&activities=`;
    activities.forEach((activity) => {
      destination += `${activity.value},`;
    });
    destination += `&rather=${rather.value}&means=${means}&extra=${extra}`;

    // Navigate to the selected destination HTML file
    window.location.href = destination;
  });});