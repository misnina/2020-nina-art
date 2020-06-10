const paImage = [];
for (let i = 1; i <= 14; i++) {
  let num = i;
  if (i < 10) num = `0${i}`;
  paImage.push({id: i, src: `/pixelart/${num}.gif`, alt: `pixel art image: ${i}`});
}

const digiImage = [];
for (let i = 1; i <= 14; i++) {
  let num = i;
  if (i < 10) num = `0${i}`;
  digiImage.push({id: i, src: `/digital/${num}.png`, alt: `digital art image: ${i}`});
}

export { paImage, digiImage }