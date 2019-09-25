var string = '';
for (var i = 0; i < 7; i++) {
  if (i < 7) {
    console.log(string = string.concat('#')); // redefining string in the console.log as loops over and changes every time
  }
}
