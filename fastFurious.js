function generateFastFuriousQuote() {
  const subjects = ["I", "You", "We", "They"];
  const actions = ["drive", "race", "burn rubber with", "unleash"];
  const objects = ["a car", "the streets", "a muscle car", "the turbo"];
  const adverbs = ["furiously", "recklessly", "with purpose", "like there's no tomorrow"];
  const endings = ["for family.", "for honor.", "to win.", "because it's all we know."];

  let subject = subjects[Math.floor(Math.random() * subjects.length)]; 
  let action = actions[Math.floor(Math.random() * actions.length)];
  let object = objects[Math.floor(Math.random() * objects.length)];
  let adverb = adverbs[Math.floor(Math.random() * adverbs.length)];
  let ending = endings[Math.floor(Math.random() * endings.length)];

  return `${subject} ${action} ${object} ${adverb} ${ending}`;
}

function generateQuote() {
    document.getElementById('quote').textContent = generateFastFuriousQuote();
  }

//Math.random generates a random number between 0 and 1. 
//This is then multiplied by subject.length (number of elements in array).
//Math.floor is then applied to round this number to a whole integer - this integer now represents the index.
//This sequence sets new variable, subject, the value of one of the elements in subjects. same set of steps for action, object, etc.

//The .textContent property is used to set the text content of element with id 'quote' - this is a paragraph element in the index.html file

