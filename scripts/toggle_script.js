function toggleBackgroundColor() {
    if (document.body.style.backgroundColor !== 'black') {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = '#e4b813'; // Set text color to #e4b813
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black'; // Set text color to black
    }
}
