const hello = $('h1')
// hello.on('click', ()=>{
//     alert('jquerry działa ;)')
// } )


const $reg = $('.register')
const $name = $('input[type="text"]')
const $email = $('input[type="email"]')
const $select = $('select');
const $check = $('input[type="checkbox"]')
let nm;
let em;
let country;
let isChecked



$reg.on('click',() => {
    if ($email.val().indexOf('@') === -1){
        console.log('to nie jest email')
        
    }else{
        console.log('to jest email')
        em = true;
    }
    
    if ($name.val().length === 0){
        console.log('krotkie to imie')
    }else{
        console.log('teraz juz troche lepiej ;)')
         nm = true;
    }

    if(!$select.val()){
        console.log('wybierz jakiś kraj')
    }else{
        console.log('powinno być git')
        country = true;
    }

    if($check.attr('checked')){
        console.log('zaznaczone')
        isChecked = true;
    }else{
        console.log('zaakceptuj regulamin ośle')
    }
    nm && em && country && isChecked? alert("szerokiej drogi"): alert('cos tutaj nie gra;(')

        
})



// $name.on('click',() => alert('name$'))
// $email.on('click',() =>alert('email$'))