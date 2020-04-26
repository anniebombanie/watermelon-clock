const sHand = document.querySelector('.s');
const mHand = document.querySelector('.m');
const hHand = document.querySelector('.h');

function setTime() {
  const d = new Date();
  const s = d.getSeconds();
  const m = d.getMinutes();
  const h = d.getHours();

  const sDeg = (( s / 60 ) * 360 );
  const mDeg = (( m / 60 ) * 360 );
  const hDeg = (( h / 12 ) * 360 );

  sHand.style.transform = `rotate( ${sDeg}deg )`;
  mHand.style.transform = `rotate( ${mDeg}deg )`;
  hHand.style.transform = `rotate( ${hDeg}deg )`;
}

setInterval( setTime, 1000 );
