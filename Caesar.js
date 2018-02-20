function caesar() {


  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];

  var input = document.getElementById('input_message').value.toLowerCase();
  var step = parseInt(document.getElementById('step').value);
  var output = "";
  var temp = "";

  for (var i = 0; i < input.length; i++) {
    temp = input[i];
    if (temp != " ") {
      var index = alphabet.indexOf(input[i]);

      index += step;
      if (index > 25) {
        index -= 26;
      }

      output += alphabet[index];
    } else {
      output += temp;
    }

    console.log(output);
    document.getElementById('output_message').value = output;

  }
}

function caesarDecrypt() {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];

  var input = document.getElementById('input_message').value.toLowerCase();
  var step = parseInt(document.getElementById('step').value);
  var output = "";
  var temp = "";

  for (var i = 0; i < input.length; i++) {
    temp = input[i];
    if (temp != " ") {

      var index = alphabet.indexOf(input[i]);

      index -= step;
      if (index < 0) {
        index += 25;
      }
      console.log(index);

      output += alphabet[index];
    } else {
      output += temp;
    }

  }

  console.log(output);
  document.getElementById('output_message').value = output;

}

function binaryEncode() {

  var output = document.getElementById("output_message");

  var input = document.getElementById("input_message").value.toLowerCase();
  output.value = "";
  for (i = 0; i < input.length; i++) {
    output.value += input[i].charCodeAt(0).toString(2) + " ";
  }


}


function binaryDecode() {

  var output = document.getElementById("output_message");

  var input = document.getElementById("input_message").value.toLowerCase();
  output.value = "";
  for (i = 0; i < input.length; i++) {
    output.value += input[i].toString(2).charCodeAt(0) + " ";
  }

}
