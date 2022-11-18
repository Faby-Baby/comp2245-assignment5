document.addEventListener("DOMContentLoaded", function(){
    let btn1 = document.querySelector("#lookup");
    let btn2 = document.querySelector("#city");

    btn1.addEventListener("click", function(event) {
        event.preventDefault();

        let value = document.querySelector("#country").value;
        
        fetch(`http://localhost/comp2245-assignment5/world.php?country=${value}`)
        .then(response => response.text())
        .then(data => {
            let result = document.querySelector("#result");

            result.innerHTML = data;
        })
        .catch(error => {

        })
    });

    btn2.addEventListener("click", function(event) {
        event.preventDefault();

        let value = document.querySelector("#country").value;

        fetch(`http://localhost/comp2245-assignment5/world.php?country=${value}&lookup=cities`)
        .then(response => response.text())
        .then(data => {
            console.log(data);
            let result = document.querySelector("#result");

            result.innerHTML = data;
        })
        .catch(error => {

        })
    })


})