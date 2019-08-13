
// define constant that will hook onto the the table body with the id of tableTarget
    const TableBody = document.getElementById('tableTarget');
        
  // will load the json file directly after DOM is loaded
    document.addEventListener('DOMContentLoaded', ()=> {loadChampions();
    });
  //function that will load the wimbledon.json file to the page
    function loadChampions(){
    
    const request = new XMLHttpRequest();
        request.open('get', '../resources/wimbledon.json');
            request.onload = () => {
                const json = JSON.parse(request.responseText);   
                    json.forEach((row) => {
                const tr = document.createElement('tr');
                    row.forEach((cell) => {
                const td = document.createElement('td');
                    td.textContent = cell;
                    tr.appendChild(td);
  });

                TableBody.appendChild(tr);

});    
// add pagination to the loaded page 
      $('#championsTable').paginate({ limit: 10 });
    };
// if there is an error loading the json then display an error message
    request.onerror = function () {
  alert('sorry there was an error loading the data');
}
// send the request
    request.send();
}

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