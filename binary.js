function binaryEncode() {

  var output = document.getElementById("outputMessage");

  var input = document.getElementById("inputMessage").value;
  output.value = "";
  for (i = 0; i < input.length; i++) {
    output.value += input[i].charCodeAt(0).toString(2) + " ";
  }


}

function binaryDecode(){

var outputBinary = document.getElementById('inputMessage').value;

var output = "";

outputBinary.split(" ").map(function(alphabet){

  var alphabetBinary = parseInt(alphabet, 2);

  output+= String.fromCharCode(alphabetBinary);
});

document.getElementById('outputMessage').value = output;
}
