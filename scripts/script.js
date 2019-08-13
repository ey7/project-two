
// define constant that will hook onto the the table body with the id of tableTarget
    const TableBody = document.getElementById('tableTarget');
        
  // will load the relevant json file directly after DOM is loaded
    document.addEventListener('DOMContentLoaded', ()=> {loadChampions();
    });
  
// search function
function search() {
  var input, filter, table, tr, td, i, txtValue;

  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("championsTable");
    tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
        if (td) {
    txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
//variables
  var input = document.getElementById("myInput");
  var clear = document.getElementById('clear');

// ensure that input window has focus when the page is opened
    input.focus();
    
//clear searchbox function for a new search
  function clearInput(){
      input.value = " ";
      window.location.reload();
}
// add event listener to the clear variable to clear searchbox

clear.addEventListener('click', clearInput);