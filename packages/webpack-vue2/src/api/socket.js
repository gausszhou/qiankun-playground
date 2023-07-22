// request/socket.js
import io from "socket.io-client";

const wsServer = "ws://localhost:2020";
const socket = io(wsServer);

// 方法
socket.prototype = {
  sendOffer: (offer, target) => {
    this.emit(offer, target);
  },
  sendAnswer: (answer, target) => {
    this.emit(answer, target);
  },
  sendCandidate: (candidate, target) => {
    this.emit(candidate, target);
  }
};

// 事件
// 基本事件
socket.on("connect", () => {
  console.log("connect");
});

socket.on("message", () => {
  console.log("message");
});

socket.on("disconnect", () => {
  console.log("disconnect");
});

socket.on("error", () => {
  console.log("error");
});

// 自定义事件
socket.on("publishOffer", e => {
  console.log(e);
});
socket.on("publishAndser", e => {
  console.log(e);
});
socket.on("publishOffer", e => {
  console.log(e);
});

export default socket;
