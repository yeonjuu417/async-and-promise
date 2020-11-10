let player = document.querySelector('#player');
let title = document.querySelector('#title');

let btnCallback = document.querySelector('#btnCallback');
btnCallback.onclick = runCallback;

let btnPromise = document.querySelector('#btnPromise');
btnPromise.onclick = runPromise;

let btnAsync = document.querySelector('#btnAsync');
btnAsync.onclick = runAsync;

function runCallback() {
  resetTitle(); // 제목을 초기합니다. 1
  playVideo(); // 영상을 재생합니다. 2

  delay(1000, () => {
    pauseVideo(); // 영상을 멈춥니다. 3
    displayTitle(); //제목을 표시합니다 4 

    delay(500, () => {
      highlightTitle(); // 제목을 강조합니다 5
      delay(2000, resetTitle); // 제목을 초기화합니다. 6
    });
  });

}


function runPromise() {
  resetTitle();
  playVideo();

  sleep(1000).then((param) => {
    console.log(param);
    pauseVideo();
    displayTitle();
    return 'world'
  })
  .then((param) => { 
    console.log(param);
    sleep(500);
  })
  .then(highlightTitle)
  .then(sleep.bind(null, 2000))
  .then(resetTitle)
  .catch(err => {
    console.log(err);
  })
}

async function runAsync() {
  resetTitle();
  playVideo();

  await sleep(1000);
  pauseVideo();
  displayTitle();

  await sleep(500);
  highlightTitle();

  await sleep(2000);
  resetTitle();
  
}


function resetTitle() {
  log('제목을 초기화합니다');
  title.classList.remove('visible', 'highlight');
}

function playVideo() {
  log('영상을 재생합니다');
  player.play();
}

function pauseVideo() {
  log('영상을 멈춥니다');
  player.pause();
}

function displayTitle() {
  log('제목을 표시합니다');
  title.classList.add('visible');
}

function highlightTitle() {
  log('제목을 강조합니다');
  title.classList.add('highlight');
}

function log(message) {
  let logger = document.querySelector('#logger');
  let l = document.createElement('div');
  l.textContent = `[${new Date().toISOString().slice(11, -5)}] ${message}`;
  logger.prepend(l);
}