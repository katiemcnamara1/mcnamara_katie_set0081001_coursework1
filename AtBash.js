//decode function needed, to decrypt this function AtBash() is recalled

function AtBash() {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];
  var reverse = ['z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 'o', 'n', 'm', 'l', 'k', 'j', 'i', 'h',
  'g', 'f', 'e', 'd', 'c', 'b', 'a'];


  var input = document.getElementById('inputMessage').value.toLowerCase();
  var output = "";
  var temp = "";
  var stringTemp = "";
//go through each instance in the input message
  for (var i = 0; i < input.length; i++) {
//set current index equal to temp
    temp = input[i];
//if not a space
    if (temp != " ") {
      //go through the alphabet
      for (var j = 0; j < alphabet.length; j++) {
//if temp equal to index in the alphabet
        if (temp == alphabet[j]) {
//new variable stringTemp is equal to the indexd in reverse
          stringTemp = reverse[j];
//set this variable to the output
          output += stringTemp;
        }
      }
    }
//if a space
    else {
      output += temp;

    }

  }
//display output
  document.getElementById("outputMessage").value = output;
}
