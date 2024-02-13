
document.addEventListener('DOMContentLoaded', () => {
  const AttacksButton = document.getElementById('Atks-btn');
  const WAFButton = document.getElementById('WAF-btn');

  let pageUrl= './';
  
  function redirectToPage(pageUrl) {
   window.location.href = pageUrl;
  }


  AttacksButton.addEventListener('click', function(){
      redirectToPage('pages/Attacks/Attacks.html');
  })

  WAFButton.addEventListener('click', function(){
      redirectToPage('pages/WAF/WAF.html');
  })

});
