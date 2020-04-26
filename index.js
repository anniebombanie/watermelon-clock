function setDate() {
  const now = new Date();
  const s = now.getSeconds();
  const sDegrees = ( s / 60 )* 360;
}

setInterval( setDate, 1000 );