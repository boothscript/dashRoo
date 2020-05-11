console.log('in worker');

onmessage = (e) => {
  console.log('from main ', e.data);
};

setInterval(() => {
  console.log('worker');
  postMessage('tick');
}, 500);
