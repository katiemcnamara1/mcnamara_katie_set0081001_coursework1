function binaryEncode() {

  var output = document.getElementById("outputMessage");

  var input = document.getElementById("inputMessage").value;
  output.value = "";
//go through each instance in the input message
  for (i = 0; i < input.length; i++) {
//charCodeAt returns unicode number of the current index, toString uses 2 complement to convert to binary set it equal to output and convert to binary
    output.value += input[i].charCodeAt(0).toString(2) + " ";
  }


}

function binaryDecode(){

var outputBinary = document.getElementById('inputMessage').value;

var output = "";

//map used to take array and modify
outputBinary.split(" ").map(function(alphabet){

//get 2s compliment zero
  var alphabetBinary = parseInt(alphabet, 2);
//set output as string from the 2s complement result
  output+= String.fromCharCode(alphabetBinary);
});
//output
document.getElementById('outputMessage').value = output;
}
