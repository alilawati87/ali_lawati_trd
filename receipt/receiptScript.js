  <!-- Include html2pdf.js -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
  
  <!-- Your JavaScript code -->
  <script>
    function generatePDF() {
      // Get the element to print
      const element = document.getElementById('invoice-Pos');

      // Define options for html2pdf
      const opt = {
        margin:       0,
        filename:     'receipt.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true },
        jsPDF:        { unit: 'mm', format: [80, 'auto'], orientation: 'portrait' }
      };

      // Generate PDF and trigger print
      html2pdf().set(opt).from(element).toPdf().get('pdf').then(function (pdf) {
        const blobUrl = pdf.output('bloburl');
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = blobUrl;
        document.body.appendChild(iframe);
        iframe.onload = function() {
          setTimeout(function() {
            iframe.contentWindow.print();
          }, 1);
        };
      });
    }

    // Call the function after the page has fully loaded and any adjustments are made
    window.onload = function() {
      // Perform any adjustments to the HTML content here if necessary
      // ...

      // Generate and print the PDF
      generatePDF();
    };

    // Optional console message
    console.log("Receipt printed successfully.");
  </script>
</body>
</html>
