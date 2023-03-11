const { Worker } = require("worker_threads");

function sortArrayWithWorker(arr, callback) {
  const worker = new Worker("./worker.js");

  worker.on("error", (err) => {
    callback(err);
  });

  worker.on("message", (sortedArr) => {
    callback(null, sortedArr);
  });

  worker.postMessage(arr);
}

const arr = [];
for (let i = 0; i < 1000000; i++) {
  arr.push(Math.floor(Math.random() * 100) + 1);
}

sortArrayWithWorker(arr, (err, sortedArr) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Done");
  }
});

console.log("called sortArray");
