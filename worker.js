const { parentPort } = require("worker_threads");

parentPort.once("message", (arr) => {
  arr.sort((a, b) => a - b);
  parentPort.postMessage(arr);
});
