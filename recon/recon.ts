import {execSync} from 'node:child_process'
import path from 'path'
import { toolPath} from '../utils/util'


export function subFinderList(domains:string[], outputDir:string) {
  const subfinderPath = toolPath('subfinder')
  const domainsSpread = domains.reduce((prev,curr)=> prev+' '+curr )
  const command = `${subFinderList} -dL ${domains} >> ${path.join(outputDir,'recon-result','domains.txt')}`;
  try {
    execSync(command);
  } catch (error) {
    console.error("Error executing command:", error);
  }
}
