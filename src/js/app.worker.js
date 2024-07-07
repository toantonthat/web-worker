console.log('load app.worker.js');

self.onmessage = event => {
  console.log('ToanDN received message: ', event.data);
  const msg = 'Hello ToanTT';
  console.log('ToanDN sends: ', msg);
  self.postMessage(msg);
}
