function playMedia(){
  const box = document.getElementById('mediaBox');
  const vid = document.getElementById('vid');
  box.classList.add('playing');
  vid.setAttribute('controls', '');
  vid.play().catch(() => {
    // video.mp4 not found yet — put your own file named "video.mp4"
    // in this same folder and it will autoplay.
  });
}