console.log('load app.worker.js');

self.onmessage = event => {
  console.log('event ', event.data);
  self.postMessage('hello toantt');
}
