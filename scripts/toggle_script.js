function toggleBackgroundColor() {
    // Toggle body background and text color
    if (document.body.style.backgroundColor !== 'black') {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = '#e4b813'; // Set body text color to #e4b813
        
        // Change textarea and input text color to #e4b813 when background is black
        document.querySelectorAll('textarea, input').forEach(el => {
            el.style.color = '#e4b813';
            el.style.backgroundColor = '#333'; // Optional: Darker background for contrast
        });

        // Change h2 font color to #7600c3 when background is black
        document.querySelectorAll('h2').forEach(h2 => {
            h2.style.color = '#7600c3';
        });
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black'; // Set body text color to black
        
        // Change textarea and input text color back to black when background is white
        document.querySelectorAll('textarea, input').forEach(el => {
            el.style.color = 'black';
            el.style.backgroundColor = 'white'; // Optional: White background
        });

        // Change h2 font color back to black when background is white
        document.querySelectorAll('h2').forEach(h2 => {
            h2.style.color = 'black';
        });
    }
}


function toggleBackgroundColor2() {
    if (document.body.style.backgroundColor !== 'black') {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = '#e4b813'; // Set text color to #e4b813
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black'; // Set text color to black
    }
}
