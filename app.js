document.addEventListener("click", () => {
  const max = 255;
  const min = 60;

  let x = `rgb(${Math.floor(Math.random() * (max - min + 1)) + min},${
    Math.floor(Math.random() * (max - min + 1)) + min
  },${Math.floor(Math.random() * (max - min + 1)) + min})`;
  let y = `rgb(${Math.floor(Math.random() * (max - min + 1)) + min},${
    Math.floor(Math.random() * (max - min + 1)) + min
  },${Math.floor(Math.random() * (max - min + 1)) + min})`;

  document.body.style.background = `linear-gradient(to top right,${x},${y})`;
  console.log(x);
  console.log(y);
});
