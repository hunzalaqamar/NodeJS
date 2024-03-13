const EventEmitter = require("node:events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on("WaterFull", () => {
  console.log("Please Turn off the pump");
  setTimeout(() => {
    console.log("Soft Reminder");
  }, 3000);
});
myEmitter.emit("WaterFull");
console.log("i'm running");
