const registerSW = scope => {
  if (navigator.serviceWorker) {
    // Register the SW
    navigator.serviceWorker.register('/sw.js', { scope })
      .then(registration => {
        console.log('registration object: ', registration);
        if (registration.active) {
          registration.active.postMessage('want SW to respond to this');
        }
      })
      .catch(console.log);
  
    navigator.serviceWorker.addEventListener('message', e => console.log(e.data));
  }
};

export default registerSW;
