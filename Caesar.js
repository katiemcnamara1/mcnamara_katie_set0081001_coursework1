function caesar() {


  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var input = document.getElementById('inputMessage').value.toLowerCase();
  var step = parseInt(document.getElementById('step').value);
  var output = "";
  var temp = "";
//go through each instance in the input message
  for (var i = 0; i < input.length; i++) {
//set the index of input to variable temp
    temp = input[i];
//if its not a space
    if (temp != " ") {
      var index = alphabet.indexOf(input[i]);

//add the step count user chose to the index
      index += step;
      if (index > 25) {
        //if user chooses more than 25 steps
        index -= 26;
      }

      output += alphabet[index];
    }
//if not more than 25
    else {
      output += temp;
    }

//display output
    document.getElementById('outputMessage').value = output;

  }
}

function caesarDecrypt() {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var input = document.getElementById('inputMessage').value.toLowerCase();
  var step = parseInt(document.getElementById('step').value);
  var output = "";
  var temp = "";

  for (var i = 0; i < input.length; i++) {
    temp = input[i];
    if (temp != " ") {

      var index = alphabet.indexOf(input[i]);
//take the step count after from the index
      index -= step;
      if (index < 0) {
        index += 26;
      }

      output += alphabet[index];
    } else {
      output += temp;
    }

  }


  document.getElementById('outputMessage').value = output;

}
