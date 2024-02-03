const os = require('node:os')

function CurrentOS(){
  return os.platform()
}

export function getExtension(){
  if(CurrentOS === 'win32'){
    return '.exe'
  }
  else return ''
}

const ext = getExtension()

