let words = document.querySelectorAll(".word");

const animateAll = (animate) => {
  setTimeout(() => {
    animate(words[0]);
    setTimeout(() => {
      animate(words[1]);
      setTimeout(() => {
        animate(words[2]);
      }, 1000);
    }, 1000);
  }, 1000);
};

// const animateAll = (animate) => {
//   let time = 0;
//   for (let i = 0; i < words.length; i++) {
//     setTimeout(() => {
//       animate(words[i]);
//     }, (time + 1000));
//   }
// };

const animate = (word) => {
  word.classList.add("animate");
};

animateAll(animate);

// const animateAll = (animate) => {
//   words.forEach(element => {
//       setTimeout(() => {
//         animate(element);
//       }, 1000);
//   });
// };

// words.forEach((animate) => {
//   animateAll(animate);
// });
