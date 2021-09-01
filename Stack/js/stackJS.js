function addRow() {
    var tbodyRef = document.getElementById('myTable').getElementsByTagName('thead')[0];
  
  var newRow = tbodyRef.insertRow(0);
  
  var newCell = newRow.insertCell(0);
  var newText = document.createTextNode(Math.floor(Math.random() * 10));
  newCell.appendChild(newText);
  }
  
  function deleteRaw(){
    document.getElementById("myTable").deleteRow(0);
  }