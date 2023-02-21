// There’s an endless loop, where the JavaScript engine waits for tasks,
// executes them and then sleeps, waiting for more tasks.
let i = 0;
let start = Date.now();

function count() {
  // do a heavy job
  for (let j = 0; j < 1e9; j++) {
    i++;
  }
  console.log("Done in " + (Date.now() - start) + 'ms');
}

count();

function count() {
  // do a piece of the heavy job (*)
  do {
    i++;
  } while (i % 1e6 != 0);

  if (i == 1e9) {
    console.log("Done in " + (Date.now() - start) + 'ms');
  } else {
    setTimeout(count); // schedule the new call (**)
  }
}
count();
