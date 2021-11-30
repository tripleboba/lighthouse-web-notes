// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, actionWhenFound) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
      actionWhenFound.index = i;  // assign function with index variable
      actionWhenFound();   // execute callback
    }
  }
};

const actionWhenFound = function() {
  console.log(`Found Waldo at index ${actionWhenFound.index} !`);
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);