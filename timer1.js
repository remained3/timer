// take input from argument line
const alertTimes = process.argv.splice(2);
//console.log(alertTimes);
//make sure there is at least one argument
if (!alertTimes) {
  return;
}

for (let time of alertTimes) {
  // go over each time entered
  if (time < 0 || isNaN(time)) {
    time++;
  } else {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, (1000 * time));
  }
}