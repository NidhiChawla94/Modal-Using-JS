function confirmationModal(confirmationText) {
    document.getElementById("confirmationText").innerHTML = confirmationText;
    var modal = document.getElementById("myModal");
    modal.style.display = "block"
 }
 function setConfirmResponse(retVal) {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
    if( retVal == true ) {
        document.getElementById("confirmationResponse").innerHTML = "User wants to continue!";
        return true;
     } else {
         document.getElementById("confirmationResponse").innerHTML = "User does not want to continue!";
        return false;
     }
 }