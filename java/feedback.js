
  const stars = document.querySelectorAll('.star');
let ratingValue = 0;

stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    ratingValue = index + 1;
    updateRating();
  });
});

function updateRating() {
  stars.forEach((star, index) => {
    if (index < ratingValue) {
      star.style.color = 'red';
    } else {
      star.style.color = 'gray';
    }
  });
}

document.getElementById('form').addEventListener('submit', function(event){
  event.preventDefault();

  var message = document.getElementById('message').value;

  console.log(message);
  
  var regex_message = /^[a-zA-Z0-9\s.,!?\-]+$/


  if(message==""){
    var n1=document.getElementById('message')
    n1.style.border="1px solid red";
    var msg=document.getElementById('error-msg')
    msg.textContent='plesae fill-out this content'
    msg.style.color='red'
    msg.style.display='block'
}
else if(!regex_message.test(message)){
    var msg=document.getElementById('error-msg')
    msg.textContent='Invalid phone number ,number must be 11 characters long'
    msg.style.color='red'
    msg.style.display='block'
}
else if(regex_message.test(message)){
    var n=document.getElementById('error-msg')
    n.style.display='none'
    var n1=document.getElementById('message')
    n1.style.border="";
}

if(regex_message.test(message)){
  alert('Thank you for your feedback!');
  document.getElementById("form").reset();
}

});