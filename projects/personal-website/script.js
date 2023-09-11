/*
fetch(link)
  .then(response => response.text())
  .then(data => {
    // Create a DOM parser
    let parser = new DOMParser();

    // Parse the HTML string
    let htmlDoc = parser.parseFromString(data, 'text/html');

    // Get the SVG element from the parsed HTML
    let svgElement = htmlDoc.querySelector('svg');

    // Select the target div
    let targetDiv = document.querySelector('#streak-stats-num');

    // Insert the SVG into the target div
    targetDiv.appendChild(svgElement);
  })
  .catch(error => console.error('Error:', error));
*/