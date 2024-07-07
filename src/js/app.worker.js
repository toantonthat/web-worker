console.log('load app.worker.js');

self.onmessage = (event) => {
  console.log('Worker received: ', event.data);
  self.postMessage('hello, ToanTT')
}
