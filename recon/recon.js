const { execSync } = require("node:child_process");
const path = require("path");
const { toolPath } = require("../utils/util");
const { createDirIfNotExist } = require("../utils/util");

function subFinder(domains, outputDir) {
  const subfinderPath = toolPath("subfinder");
  // const domainsSpread = domains.reduce((prev,curr)=> prev+' '+curr )
  const resultFolder = "recon_result";
  createDirIfNotExist(outputDir, resultFolder);
  const command = `${subfinderPath} -d ${domains} >> ${path.join(
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

function httprobe_w(outputDir) {
  const httprobe_wPath = toolPath("httpx");
  const resultFolder = "recon_result";
  createDirIfNotExist(outputDir, resultFolder);
  const command = `${httprobe_wPath} -l ${path.join(
    outputDir,
    resultFolder,
    "domains.txt"
  )} -o ${path.join(outputDir, resultFolder, "live_domains.txt")}`;
  try {
    execSync(command);
    console.log("Done Successfully.");
  } catch (error) {
    console.error("Error executing command:", error);
  }
}
function screenwin(outputDir) {
  const httpxPath = toolPath("httpx");
  const resultFolder = "recon_result";
  createDirIfNotExist(outputDir, resultFolder);
  const command = `${httpxPath} -ss -l ${path.join(
    outputDir,
    resultFolder,
    "domains.txt"
  )} -srd ${path.join(outputDir, resultFolder, "screen")}`;
  try {
    execSync(command);
    console.log("Done Successfully.");
  } catch (error) {
    console.error("Error executing command:", error);
  }
}

function wwayback(outputDir) {
  const wwaybackPath = toolPath("waybackurls");
  const resultFolder = "recon_result";
  createDirIfNotExist(outputDir, resultFolder);
  const command = `cat "${path.join(
    outputDir,
    resultFolder,
    "domains.txt"
  )}" | ${wwaybackPath} >> ${path.join(
    outputDir,
    resultFolder,
    "archive.txt"
  )}`;

  //  'type "D:\\recon_result\\domains.txt" | D:\\05-Haitham\\Projects\\hunter\\bin\\waybackurls >> "D:\\recon_result\\archive.txt"';

  try {
    execSync(command);
    console.log("Done Successfully.");
  } catch (error) {
    console.error("Error executing command:", error);
  }
}
function fetchjs(outputDir) {
  const wwaybackPath = toolPath("waybackurls");
  const resultFolder = "recon_result";
  createDirIfNotExist(outputDir, resultFolder);
  const command = `cat "${path.join(
    outputDir,
    resultFolder,
    "domains.txt"
  )}" | ${wwaybackPath} | findstr ".js" >> ${path.join(
    outputDir,
    resultFolder,
    "js.txt"
  )}`;
  try {
    execSync(command);
    console.log("Done Successfully.");
  } catch (error) {
    console.error("Error executing command:", error);
  }
}
function parameter(outputDir) {
  const wwaybackPath = toolPath("waybackurls");
  const resultFolder = "recon_result";
  createDirIfNotExist(outputDir, resultFolder);
  const command = `cat "${path.join(
    outputDir,
    resultFolder,
    "domains.txt"
  )}" | ${wwaybackPath} | findstr "=" >> ${path.join(
    outputDir,
    resultFolder,
    "parameter.txt"
  )}`;
  try {
    execSync(command);
    console.log("Done Successfully.");
  } catch (error) {
    console.error("Error executing command:", error);
  }
}
function testRecon() {
  subFinder("exemple.com", "D:\\");
   httprobe_w("D:\\");
   screenwin('D:\\');
   wwayback("D:\\");
  fetchjs("D:\\");
  parameter("D:\\");
}

module.exports = {
  subFinder,
  testRecon,
};
