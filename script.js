let output = "#";
for (i = 0; i < 6; i++) {
  output = output + "#";
  console.log(output);
}

for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log("par");
  } else {
    console.log("imppar");
  }
}

for (let i = 0; i <= 15; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else console.log(i);
}
