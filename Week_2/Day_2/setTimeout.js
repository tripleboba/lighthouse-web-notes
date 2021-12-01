setTimeout (function(){
  console.log('>>> 3 secs passed!')
}, 3 * 1000);

const delayPrint = (str, time) => {
  for (let w of str) {
    setTimeout(function(){ console.log(w); }, time * 1000);
    time++;
  }
};

delayPrint('delay print', 1);