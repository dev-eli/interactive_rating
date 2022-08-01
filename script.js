let arr = document.getElementById('options').getElementsByTagName('li');
let submit = document.getElementsByTagName('button');

for (let i=0; i<arr.length;i++) {
    //console.log(arr[i]);
    arr[i].addEventListener('click', clickedRating);
}

submit[0].addEventListener('click', clickedSubmit);

let option = -1;
function clickedRating(e) {
    option = this;
    console.log("yes, you clicked " + option.id + "!");
    for (let i=0; i<arr.length; i++) {
        
        //arr[i].style.backgroundColor = 'hsl(213, 19%, 18%)';
        if (option === arr[i]) {
            arr[i].className = 'circle active';
            //arr[i].style.backgroundColor = 'hsl(25, 97%, 53%)';
        } else {
            arr[i].className = 'circle inactive'
            
        }
    }
    
}


function clickedSubmit() {
    console.log("Submitting " +option.id);
    if (option.id != undefined) {
        document.getElementById("rating").className = 'card hidden';
        document.getElementById("thankyou").className = 'thankyou card';
        document.getElementById('rating-message').innerHTML = "You selected " +option.id+ " out of 5";
    }
}