/* modules */
const os = require("os");

console.log(os.version);
//current user
console.log(os.userInfo());
//system uptime
console.log(`The system uptime is: ${os.uptime()} seconds`);
//current os
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);

const path = require("path");
//separator
console.log(path.sep);
