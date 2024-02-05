import * as os from 'node:os'
import {join} from 'node:path'

function CurrentOS():string{
  return os.platform() as string
}

export function toolPath(tool:string){
  if(CurrentOS.toString() === "win32"){
    return join(dependenciesDir,`${tool}.exe`)
  }
  else return join(dependenciesDir,`${tool}`)
}


export const dependenciesDir = join(__dirname, 'bin');
