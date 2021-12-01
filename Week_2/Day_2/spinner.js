// improved with loop
const char = ['|', '/', '-', '\\'];
let t = 100;
const nRun = char.length * 3;       // increase the rotating of the spinner (longer)

for (let i = 0; i < nRun; i++){
  setTimeout(() => {
    process.stdout.write(`\r${char[i%4]}    `);
  }, t);
  t += 120;
}
// to make prompt move out of spinner line at the end of the printing
setTimeout(() => {console.log();}, t);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 400);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 600);

// setTimeout(() => {
//   process.stdout.write('\r\\   '); 
// }, 800);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 1000);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1200);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1400);

// setTimeout(() => {
//   // \n at the last for the prompt not to be @ the same line
//   // after the write ends
//   process.stdout.write('\r\\   \n'); 
// }, 1600);