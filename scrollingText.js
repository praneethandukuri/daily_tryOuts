function scrollText(screen, text) {
  let frames = "";

  for (const char of text) {
    frames += screen.join("");
    screen.shift();
    screen.push(char);
  }

  for (let index = 0; index < text.length; index++) {
    frames += screen.join("");
    screen.shift();
    screen.push(" ");
  }

  return frames;
}

function displayAnimFormat(width, height, frames) {
  console.log(width, height);
  console.log(frames);
}

function main() {
  const text = "Hello world!";
  const screen = (" ".repeat(text.length)).split("");

  const frames = scrollText(screen, text);
  displayAnimFormat(text.length, 1, frames);
}

main();