// need a generator function to yield colors
const colorGenerator = function* () {
  const colors = [
    "Blue",
    "Red",
    "Orange",
    "Purple",
    "Goldenrod",
    "Aquamarine",
    "Olive",
    "Azure",
    "Fuchsia",
    "Chocolate",
    "Salmon",
    "Amaranth",
  ];

  // move down the indices of 'colors' every time we call .next()

  /*
  let counter = 0;
  while (counter < colors.length) {
    yield (currentColor = colors[counter]);
    counter++;
  }
  */

  for (const color of colors) {
    yield color;
  }
};

// a factory function that will build and return new reindeer obj using the generator
const createNewColoredReindeer = (reindeerName) => {
  // get a color from the generator function
  const newColor = myColorGenerator.next().value;

  // build a new object
  const newReindeerObj = {
    name: reindeerName,
    color: newColor,
  };

  // return the new object
  return newReindeerObj;
};

const coloredReindeerBuilder = function () {
  const reindeer = [
    "Dasher",
    "Dancer",
    "Prancer",
    "Vixen",
    "Comet",
    "Cupid",
    "Donner",
    "Blitzen",
  ];

  // build up an array of colored reindeer objects
  const coloredReindeer = [];

  // Write a for loop that looks at each reindeer
  for (const name of reindeer) {
    // Invoke factory function to create reindeer object
    const reindeerObj = createNewColoredReindeer(name, myColorGenerator);

    // Put new reindeer object in coloredReindeer array
    coloredReindeer.push(reindeerObj);
  }

  // Return coloredReindeer array
  return coloredReindeer;
};

// start the generator
const myColorGenerator = colorGenerator();

const myColoredReindeer = coloredReindeerBuilder();
console.log(myColoredReindeer);
