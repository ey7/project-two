
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

    // script for the scroll to top button

    // When the user scrolls down 60px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

        function scrollFunction() {

            if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
            document.getElementById("scrollButton").style.display = "block";
            } else {
                document.getElementById("scrollButton").style.display = "none";
            }
        }

    // When the user clicks on the button, scroll to the top of the document
    function topScroll() {

        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    } 