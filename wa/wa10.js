const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = ':insertx: wanted brownies, so they decided to follow the first recipe found on Google. As such, they preheated the oven to 325 fahrenheit. When they realized they had no cocoa powder, they decided to use :inserty: instead. Once the baking time had passed, the brownies :insertz:. Bob saw the whole thing, but was not surprised — :insertx: was unique in their ability to disobey basic instructions.';
const insertX = ['Osten', 'Thee Cheese', 'Juusto'];
const insertY = ['excess baking soda', 'a mysterious jarred powder found in the kitchen', 'shredded parmesan'];
const insertZ = ['had left their baking dish and collected onto the bottom of the oven', 'spoke Latin and cursed the entire bloodline of the amateur baker', 'erupted in flames, and as such so did the house which contained them'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:',xItem);
  newStory = newStory.replaceAll(':inserty:',yItem);
  newStory = newStory.replaceAll(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name);
  }

  if (document.getElementById("uk").checked) {
    const temperature =  `${Math.round((325-32) * 5 / 9)} centigrade`;
    newStory = newStory.replaceAll('325 fahrenheit', temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
