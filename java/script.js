document.getElementById('sub').addEventListener('click',function () {
    if(form==true){
        form=false;
        document.getElementById('sub').innerHTML='Submit';
        document.getElementById('myForm').style.display='none';
    }
});

document.getElementById('moon').addEventListener('click',function () {
document.getElementById('body').addclassName('bg-dark');
});