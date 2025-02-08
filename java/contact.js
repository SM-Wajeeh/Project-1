document.getElementById("form").addEventListener("submit",function(event){
    event.preventDefault();
    var name = document.getElementById("name").value;
    var name1 = document.getElementById("name1").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var message = document.getElementById("message").value;

    console.log(name  + name1  + email +number + message);

    var regex_name=  /^[a-zA-Z]+$/
    var regex_name1=  /^[a-zA-Z]+$/
    var regex_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    var regex_number = /^[0-9]{11}$/
    var regex_message = /^[a-zA-Z0-9\s.,!?\-]+$/

    if(name==""){
        var n1=document.getElementById('name')
        n1.style.border="1px solid red";
        var n=document.getElementById('error-n')
        n.textContent='please enter name'
        n.style.color='red'
        n.style.display='block'
    }

    else if(!regex_name.test(name)){
        var n1=document.getElementById('name')
        n1.style.border="1px solid red";
        var n=document.getElementById('error-n')
        n.textContent='Name should only contain letters and spaces'
        n.style.color='red'
        n.style.display='block'
    }
    else if(regex_name.test(name)){
        var n=document.getElementById('error-n')
        n.style.display='none'

        var n1=document.getElementById('name')
        n1.style.border="";
    }

    if(name1==""){
        var n1=document.getElementById('name1')
        n1.style.border="1px solid red";
        var n=document.getElementById('error-n1')
        n.textContent='please enter last name'
        n.style.color='red'
        n.style.display='block'
    }

    else if(!regex_name1.test(name1)){
        var n1=document.getElementById('name1')
        n1.style.border="1px solid red";
        var n=document.getElementById('error-n1')
        n.textContent='Name should only contain letters and spaces'
        n.style.color='red'
        n.style.display='block'
    }
    else if(regex_name1.test(name1)){
        var n=document.getElementById('error-n1')
        n.style.display='none'
        var n1=document.getElementById('name1')
        n1.style.border="";
    }

    if(email==""){
        var n1=document.getElementById('email')
        n1.style.border="1px solid red";
        var e=document.getElementById('error-em')
        e.textContent='please enter valid email'
        e.style.color='red'
        e.style.display='block'
    }
    else if(!regex_email.test(email)){
        var n1=document.getElementById('email')
        n1.style.border="1px solid red";
        var e=document.getElementById('error-em')
        e.textContent='Invalid email address, must contain @'
        e.style.color='red'
        e.style.display='block'
    }
    else if(regex_email.test(email)){
        var n=document.getElementById('error-em')
        n.style.display='none'
        var n1=document.getElementById('email')
        n1.style.border="";
    }

    if(number==""){
        var n1=document.getElementById('number')
        n1.style.border="1px solid red";
        var num=document.getElementById('error-nm')
        num.textContent='please fill out your number'
        num.style.color='red'
        num.style.display='block'
    }
    else if(!regex_number.test(number)){
        var n1=document.getElementById('number')
        n1.style.border="1px solid red";
        var num=document.getElementById('error-nm')
        num.textContent='Invalid phone number ,number must be 11 characters long'
        num.style.color='red'
        num.style.display='block'
    }
    else if(regex_number.test(number)){
        var n=document.getElementById('error-nm')
        n.style.display='none'
        var n1=document.getElementById('number')
        n1.style.border="";
    }

    if(message==""){
        var n1=document.getElementById('message')
        n1.style.border="1px solid red";
        var msg=document.getElementById('error-msg')
        msg.textContent='plesae fill-out this content'
        msg.style.color='red'
        msg.style.display='block'
    }
    else if(!regex_message.test(message)){
        var n1=document.getElementById('message')
        n1.style.border="1px solid red";
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
    if(regex_name.test(name)&&regex_name1.test(name1)&&regex_email.test(email)&&regex_number.test(number)&&regex_message.test(message)){
        alert('Thank you for informing us!');
        document.getElementById("form").reset();
    }
})

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
        console.log(position.coords.latitude + "," + position.coords.longitude)
      document.getElementById('button').innerHTML='<a href="https://www.google.com/maps/search/?api=1&query=' + position.coords.latitude + ',' + position.coords.longitude + '" style="color: white; text-decoration: none; font-weight: 500;" >View On Google Maps</a>'
    },
function(Error){
    switch(Error.code) {
        case Error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.")
            break;
        case Error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.")
            break;
        case Error.TIMEOUT:
            alert("The request to get user location timed out.")
            break;
        case Error.UNKNOWN_ERROR:
            alert("An unknown error occurred.")
            break;
    }
    })

}