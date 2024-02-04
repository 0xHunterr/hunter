const { execSync } = require("child_process");
const path = require("path");
//const platform = require("os").platform;
//const readlineSync = require("readline-sync");
const util=require('../utils/util');

function subfinder_for_single_windows(Domain, place) {
  const cwd = path.dirname(__filename).replace(/\\\\/g, "\\");
  const command = `${cwd}\\wsubfinder.exe -d "${Domain}" >> ${place}\\recon_result\\domains.txt`;

  try {
    execSync(command);
  } catch (error) {
    console.error("Error executing command:", error);
  }
}

function subfinder_for_file_windows(filePath, place) {
  const cwd = path.dirname(__filename).replace(/\\\\/g, "\\");
  const command = `${cwd}\\wsubfinder${util.getExtension()}
 -dL ${filePath} >> ${place}\\recon_result\\domains.txt`;

  try {
    execSync(command);
  } catch (error) {
    console.error("Error executing command:", error);
  }
}

// function httprobe_w(place) {
//   const cwd = path.dirname(__filename).replace(/\\\\/g, "\\");
//   console.log("Live subdomain check is started");

//   const command = `${cwd}\\httpx.exe -l ${place}\\recon_result\\domains.txt -o ${place}\\recon_result\\live_domains.txt`;

//   try {
//     execSync(command);
//   } catch (error) {
//     console.error("Error executing command:", error);
//   }
// }

// function screenwin(place) {
//   const cwd = path.dirname(__filename).replace(/\\\\/g, "\\");

//   const command = `${cwd}\\httpx.exe -ss -l ${place}\\recon_result\\domains.txt -srd ${place}\\recon_result\\screen`;

//   try {
//     execSync(command);
//   } catch (error) {
//     console.error("Error executing command:", error);
//   }
// }

// function wwayback(place) {
//   const cwd = path.resolve(__dirname).replace(/\\\\/g, "\\");
//   console.log(place);

//   const archivePath = `"${place}\\recon_result\\archive.txt"`;
//   const command = `type "${place}\\recon_result\\domains.txt" | ${cwd}\\wwaybackurls.exe >> ${archivePath}`;

//   try {
//     execSync(command);
//   } catch (error) {
//     console.error("Error executing command:", error);
//   }
// }

// function fetchjs(place) {
//   const cwd = path.resolve(__dirname).replace(/\\\\/g, "\\");

//   const command = `type "${place}\\recon_result\\domains.txt" | ${cwd}\\wwaybackurls.exe | findstr ".js" >> ${place}\\recon_result\\js.txt`;

//   try {
//     execSync(command);
//   } catch (error) {
//     console.error("Error executing command:", error);
//   }
// }

// function Parameter(place) {
//   const cwd = path.resolve(__dirname).replace(/\\\\/g, "\\");

//   const command = `type "${place}\\recon_result\\domains.txt" | ${cwd}\\wwaybackurls.exe | findstr "=" >> ${place}\\recon_result\\parameter.txt`;

//   try {
//     execSync(command);
//   } catch (error) {
//     console.error("Error executing command:", error);
//   }
// }

// function main() {
//   console.log(`
//         1-single target
//         2-list of target
//     `);

//   const choose = readlineSync.question("Choose option: ");

//   if (choose === "1") {
//     const target = readlineSync.question("Enter target: ");

//     if (platform() === "win32") {
//       console.log("Windows");
//       subfinder_for_single_windows(target, "C:\\your\\desired\\path");
//     } else if (platform() === "linux") {
//       console.log("Linux");
//       // Add Linux logic here if needed
//     }
//   } else {
//     const filePath = readlineSync.question("Enter file path: ");

//     if (platform() === "win32") {
//       console.log("Windows");
//       subfinder_for_file_windows(filePath, "C:\\your\\desired\\path");
//     } else if (platform() === "linux") {
//       console.log("Linux");
//       // Add Linux logic here if needed
//     }
//   }

//   if (platform() === "win32") {
//     console.log("Windows");
//     const domains = ["example.com"]; // Replace with your actual array of domains
//     domains.forEach(fetchjs);
//   } else if (platform() === "linux") {
//     console.log("Linux");
//     // Add Linux logic here if needed
//   }
// }

// if (require.main === module) {
//   main();
// }
module.exports = {
  subfinder_for_single_windows,
  subfinder_for_file_windows,
  // Add other exported functions
};
