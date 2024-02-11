const { execSync } = require("node:child_process");
const path = require("path");
const { toolPath } = require("../utils/util");
const { createDirIfNotExist } = require("../utils/util");

function subFinder(domain, outputDir) {
  const subfinderPath = toolPath("subfinder");
  // const domainsSpread = domains.reduce((prev,curr)=> prev+' '+curr )
  const resultFolder = "recon_result";
  createDirIfNotExist(outputDir,resultFolder);
  const command = `${subfinderPath} -d ${domain} >> ${path.join(
    outputDir,
    resultFolder,
    "domains.txt"
  )}`;
  try {
    execSync(command);
    console.log("Done Successfully.");
  } catch (error) {
    console.error("Error executing command:", error);
  }
}

function subFinderList(domains, outputDir) {
  const subfinderPath = toolPath("subfinder");
  // const domainsSpread = domains.reduce((prev,curr)=> prev+' '+curr )
  const resultFolder = "recon_result";
  createDirIfNotExist(outputDir,resultFolder);
  const command = `${subfinderPath} -dL ${domains} >> ${path.join(
    outputDir,
    resultFolder,
    "domains.txt"
  )}`;
  try {
    execSync(command);
    console.log("Done Successfully.");
  } catch (error) {
    console.error("Error executing command:", error);
  }
}

module.exports = {
  subFinderList,
  subFinder,
};
