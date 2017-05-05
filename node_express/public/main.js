var updates = document.getElementsByClassName('editbtn');
var deletes = document.getElementsByClassName('deletebtn');
var persons = document.querySelectorAll(".allquotes .person");
var quotes = document.querySelectorAll(".allquotes .quote");

var theperson = document.querySelector('#theperson');
var thequote = document.querySelector('#thequote');

function testHandle(event) {
    let id = event.target.id;
    theperson.value = persons[id].innerHTML;
    thequote.innerHTML = quotes[id].innerHTML;
}

function deleteQuote(event) {
    let id = event.target.id;
    fetch('quotes', {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'name': persons[id].innerHTML,
            'quote': quotes[id].innerHTML
        })
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        }
    })
    .then(data => {
        // console.log(data);
        window.location.reload();
    });
}

for(let i = 0; i < updates.length; i++) {
    updates[i].addEventListener('click', testHandle, false);
    deletes[i].addEventListener('click', deleteQuote, false);
}


