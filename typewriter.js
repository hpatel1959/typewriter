const sentence = "hello there from lighthouse labs";

for (let index = 0; index < sentence.length; index++) {
  setTimeout(() => {
    if (index === sentence.length - 1) {
      process.stdout.write(sentence[index] + "\n");
    } else {
      process.stdout.write(sentence[index]);
    }
  }, 50 * index);
}
