const element = document.getElementById('watch-me');
element.addEventListener('animationstart', listener);
element.addEventListener('animationend', listener);
element.addEventListener('animationiteration', listener);

element.className = 'slide-in';
function listener(event) {
  const l = document.createElement('li');
  switch (event.type) {
    case 'animationstart':
      l.textContent = `Started: elapsed time is ${event.elapsedTime}`;
      break;
    case 'animationend':
      l.textContent = `Ended: elapsed time is ${event.elapsedTime}`;
      break;
    case 'animationiteration':
      l.textContent = `New loop started at time ${event.elapsedTime}`;
      break;
  }
  document.getElementById('output').appendChild(l);
}
