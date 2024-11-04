const button = document.getElementById('toggleButton');
button.addEventListener('click', () => {
    document.body.style.backgroundColor =
        document.body.style.backgroundColor === 'black' ? 'white' : 'black';
});
