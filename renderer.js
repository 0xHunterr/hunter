
document.addEventListener('DOMContentLoaded', () => {
  const domainInput = document.getElementById('domain');
  const processButton = document.getElementById('btn');
  const chooseFolderButton = document.getElementById('choose-file');
  const resultDiv = document.getElementById('result');

  let folderPath= './'
  chooseFolderButton.addEventListener('click',async ()=>{
    folderPath = await window.electronAPI.openFile()
  })

  processButton.addEventListener('click', async () => {
    // Get the input domain from the input field
    const inputDomain = domainInput.value;
    await window.electronAPI.subfinder(inputDomain,folderPath)
    resultDiv.innerText="Result are exported to its location"
  });

});
