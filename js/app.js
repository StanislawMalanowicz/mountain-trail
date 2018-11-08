const hello = $('h1')
hello.on('click', ()=>{
    alert('jquerry działa ;)')
} )


const $reg = $('.register')
const $name = $('input[type="text"]')
const $email = $('input[type="email"]')
let nm;
let em;



$reg.on('click',() => {
    if ($email.val().indexOf('@') === -1){
        console.log('to nie jest email')
         em = true;
    }else{
        console.log('to jest email')
        
    }
    if ($name.val().length === 0){
        console.log('krotkie to imie')
    }else{
        console.log('teraz juz troche lepiej ;)')
         nm = true;
    }

    nm && em? alert("szerokiej drogi"): alert('cos tutaj nie gra;(')
})



// $name.on('click',() => alert('name$'))
// $email.on('click',() =>alert('email$'))