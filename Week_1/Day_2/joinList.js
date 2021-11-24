/*
 * Write a function that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * To implement this we'll create a joinList function which will take
 * in any array of strings return a comma-separated string.
 *
 * Note: We can NOT use the built-in Array join function.
 */

const joinList = arr => {
  let output = "";
  let i = 0;
  // empty input check
  if (arr.length === 0 || arr[i] === "") return output;
  // get the elements
  while (i < arr.length - 1) {
    output += arr[i] + ', ';
    i++;
  }
  output += arr[arr.length - 1]; // so that the last output wouldn't include , at the end
  return output;
};


// Test / Driver Code below...
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);

// Empty string
console.log(`Empty input returns ${joinList([""])}`);
