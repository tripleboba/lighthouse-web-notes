// print all the elements in [...], [ [], ...], [ [ [], [] ], ...]

const printItems = array => {

  array.forEach(item => {   // loop through 1st array
    Array.isArray(item) ? printItems(item) : console.log(item); // if the item is an array again
  });
};

const array = ["😎", [["💩", ["🤗"]], [[["😼"]], "😂"]]];
printItems(array);