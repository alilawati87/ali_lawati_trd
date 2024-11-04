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
      var printCheckbox = document.getElementById("PrintCheckbox"); // Corrected ID
  
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
    if (Print_Dummy) {
      // Delay the print and form reset to allow printing first
      setTimeout(function() {
        window.print();    // Print the form
        resetForm();       // Reset the form after printing
        customReset();     // Custom reset after printing
      }, 500);
    } else {
      // Reset the form without printing after 500 ms
      setTimeout(function() {
        resetForm();
        customReset();
      }, 500);
    }
  }
}

