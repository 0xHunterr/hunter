const {execSync} = require('node:child_process')
const path = require('path')
const { toolPath} = require('../utils/util')
const {createDirIfNotExist} = require('../utils/util')

function subFinderList(domains, outputDir) {
  const subfinderPath = toolPath('subfinder')
  // const domainsSpread = domains.reduce((prev,curr)=> prev+' '+curr )
  const resultFolder = 'recon-result'
  createDirIfNotExist(resultFolder)
  const command = `${subfinderPath} -d ${domains} >> ${path.join(outputDir,resultFolder,'domains.txt')}`;
  try {
    execSync(command);
  } catch (error) {
    console.error("Error executing command:", error);
  }
}

module.exports = {
  subFinderList
}
