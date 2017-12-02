const sliders = document.querySelectorAll('input[name="volume"');
const sounds = document.querySelector('.sounds');


const handleAudioChange = (ev) => {
  if (ev.isTrusted) {
    const volume = parseFloat(ev.target.value);
    const soundName = ev.target.dataset.sound;
    const audio = sounds.querySelector(`audio[name=${soundName}]`);
    const image = document.querySelector(`img[data-icon-name=${soundName}]`);

    if (audio) {
      if (volume === 0) {
        audio.pause();
        audio.currentTime = 0
      } else {
        audio.volume = volume;
        audio.play();
      }
    }

    if (image) {
      image.style.opacity = 0.5 + volume/2;
    }
  }
}


sliders.forEach(slider => slider.addEventListener('change', handleAudioChange));