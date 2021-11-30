// Refactor to use anonymouse funcs
// -> no reference to actionWhenFound
const findWaldo = names => { 
  names.forEach( name => { 
    if (name === 'Waldo') {
      console.log(`Found Waldo at index ${names.indexOf(name)} !`);
    }
  });
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"]);