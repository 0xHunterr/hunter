const AttacksButtons = document.querySelectorAll('input[type="radio"][name="Attack"]');
  
function redirectToPage(pageUrl) {
    window.location.href = pageUrl;
   }


AttacksButtons.forEach(AttackButton => {
  AttackButton.addEventListener('change', (event) => {
    const selectedValue = event.target.value;
    if(selectedValue==='recon'){
      redirectToPage('Reacon/recon.html');
    }
  });
});