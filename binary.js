function binaryEncode() {

  var output = document.getElementById("output_message");

  var input = document.getElementById("input_message").value;
  output.value = "";
  for (i = 0; i < input.length; i++) {
    output.value += input[i].charCodeAt(0).toString(2) + " ";
  }


}

function binaryDecode(){

var binaryOutput = document.getElementById('input_message').value;
parseInt(binaryOutput);

var output = "";

binaryOutput.split(" ").map(function(letter){

  var letter_code = parseInt(letter, 2);

  output+= String.fromCharCode(letter_code);
});
console.log(output);
document.getElementById('output_message').value = output;
}

function binaryDecode2() {

  var output = document.getElementById("output_message");

  var input = document.getElementById("input_message").value;
  output.value = "";
  for (i = 0; i < input.length; i++) {
    output.value += input[i].toString(String, 2).charCodeAt(0) + " ";
  }
}
