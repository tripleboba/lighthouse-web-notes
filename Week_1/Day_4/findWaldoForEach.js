// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, actionWhenFound) {
  names.forEach( name => { if (name === 'Waldo') {
      actionWhenFound.index = names.indexOf(name);
      actionWhenFound();
    }
  });
};

const actionWhenFound = function() {
  console.log(`Found Waldo at index ${actionWhenFound.index} !`);
};
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);