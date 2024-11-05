var Print_Dummy = false;
function toggleCreditAmount() {
      var creditCheckbox = document.getElementById("onCredit");
      var creditAmountField = document.getElementById("creditAmountField");
      if (creditCheckbox.checked) {
        creditAmountField.style.display = "block";
      } else {
        creditAmountField.style.display = "none";
      }
    }

    function togglePrint() {
      var printCheckbox = document.getElementById("PrintReceipt"); // Corrected ID
  
      if (printCheckbox.checked) {
        Print_Dummy = true; // Use lowercase 'true'
      }else{Print_Dummy = false;}
    }
    function resetForm() {
    document.getElementById('SalesForm').reset(); // Ensure the form has an id
  }
    function customReset() {
    // Hide the creditAmountField again
    document.getElementById('creditAmountField').style.display = "none";
    // Uncheck the creditCheckbox
    document.getElementById('creditCheckbox').checked = false;
          // Reset Dummy Print Variable
  }
function submitSale(event) {
  var labourCharge = parseFloat(document.getElementById('labourCharge').value) || 0;
  var materialAmount = parseFloat(document.getElementById('materialAmount').value) || 0;

  // Check if both inputs are less than or equal to zero
  if (labourCharge <= 0 && materialAmount <= 0) {
    alert("Labour Charge and Material Amount can't both be zero or less or empty");
    event.preventDefault();
    return false;
  } 
  formSubmitted = true;
  return true; // Allow the form submission to proceed
}
function formSubmissionComplete() {
  if (formSubmitted) {
      var labourCharge = document.getElementById("labourCharge").value;
    var materialAmount = document.getElementById("materialAmount").value;

    // Check if labourCharge or materialAmount is empty, and replace with "-"
    if (labourCharge === "") {
        labourCharge = "-";
    }
    if (materialAmount === "") {
        materialAmount = "-";
    }
        
    if (Print_Dummy) {
      const mainContent = document.getElementById('main-content');
      const alternateContent = document.getElementById('alternate-content');
      const cssLink = document.getElementById('css-link');

        // Delay hiding main content and loading external HTML and CSS by 0.5 seconds
      setTimeout(function() {
        mainContent.style.display = 'none';
        cssLink.href = 'receipt/receiptStyle.css';

        fetch('receipt/receipt.html')
          .then(response => response.text())
          .then(data => {
            alternateContent.innerHTML = data;
            alternateContent.style.display = 'block';

            // Delay printing by an additional 1 second (total 1.5 seconds delay)
            setTimeout(function() {
              window.print();    // Print the receipt

              // Switch back to original content and reset the form after printing
              alternateContent.style.display = 'none';
              mainContent.style.display = 'block';
              cssLink.href = 'styles.css'; // Switch back to original CSS
              resetForm();       // Reset the form
              customReset();     // Custom reset after printing
            }, 1000); // Delay for printing (1 second)
          });

      }, 1100); // Delay for content switch (0.5 seconds)
    }
  }
}
          setTimeout(function() {
        document.getElementById("PrintReceipt").checked = true;
      }, 600);  // 500ms + 100ms delay
          
          
    } else {
      // Reset the form without printing after 500 ms
      setTimeout(function() {
        resetForm();
        customReset();
            
      }, 500); 
          

    }
  }
}
