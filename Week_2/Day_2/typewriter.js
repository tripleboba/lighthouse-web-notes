const printDelay = (str, t) => {
  for (const char of str) {
    setTimeout(() => {
      process.stdout.write(char);
    }, t);
    t += 100;
  }
  // removing the next prompt appears on the same line of the output
  // 🎼 Santa Claus is coming to town ~...% <-- %
  setTimeout(()=> {
    process.stdout.write('\n');
  }, t)
};
// run the func
const str = '🎼 🎅🎁 Santa Claus is coming to town ~ 🎶 🎄🌟';
printDelay(str,0);