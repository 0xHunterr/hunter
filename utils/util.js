const os = require('node:os')

function CurrentOS(){
  return os.platform()
}

 function getExtension(){
  if(CurrentOS === 'win32'){
    return '.exe'
  }
  else return ''
}

module.exports = {
   getExtension,
  // Add other exported functions
};

