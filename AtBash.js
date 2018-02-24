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

  for (var i = 0; i < input.length; i++) {
    temp = input[i];
    if (temp != " ") {
      for (var j = 0; j < alphabet.length; j++) {
        if (temp == alphabet[j]) {
          stringTemp = reverse[j];
          output += stringTemp;
        }
      }




    } else {
      output += temp;

    }

  }
  document.getElementById("outputMessage").value = output;
}
