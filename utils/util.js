const os = require("node:os");
const { join } = require("node:path");
const fs = require("node:fs");

function CurrentOS() {
  return os.platform();
}

function toolPath(tool) {
  if (CurrentOS.toString() === "win32") {
    return join(dependenciesDir, `${tool}.exe`);
  } else return join(dependenciesDir, `${tool}`);
}

function createDirIfNotExist(outputDir, dirname) {
  try {
    if (!fs.existsSync(join(outputDir, dirname))) {
      fs.mkdirSync(join(outputDir, dirname));
    }
  } catch (err) {
    console.error(err);
  }
}

const dependenciesDir = join(__dirname, "../bin");

module.exports = {
  dependenciesDir,
  toolPath,
  CurrentOS,
  createDirIfNotExist,
};
