const bulb = document.getElementById('bulb');
const switchBtn = document.getElementById('switch');
let isOn = true;

switchBtn.addEventListener('click', () => {
  isOn = !isOn;
  bulb.setAttribute('class', isOn ? 'on' : 'off');

  // Animate the pull
  switchBtn.classList.add('pulling');
  setTimeout(() => {
    switchBtn.classList.remove('pulling');
  }, 300);
});
