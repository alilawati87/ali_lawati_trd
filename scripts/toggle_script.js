const button = document.getElementById('toggleButton');
button.addEventListener('click', () => {
    // Get the current background color of the body
    const currentColor = window.getComputedStyle(document.body).backgroundColor;

    // If the current color is not black, change it to black
    if (currentColor !== 'rgb(0, 0, 0)') {
        document.body.style.backgroundColor = 'black';
    } 
    // Otherwise, change it to white
    else {
        document.body.style.backgroundColor = 'white';
    }
});
