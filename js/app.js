const hello = $('h1')
// hello.on('click', ()=>{
//     alert('jquerry działa ;)')
// } )


const $reg = $('.register')
const $name = $('input[type="text"]')
const $email = $('input[type="email"]')
const $select = $('select');
const $check = $('input[type="checkbox"]')
const $tool = $('.tooltip')
let nm;
let em;
let country;
let isChecked



$reg.on('click',() => {
    if ($email.val().indexOf('@') === -1){
        console.log('to nie jest email')
        em = false;   
        // $tool.css('display', 'block')
    }else{
        console.log('to jest email')
        em = true;
        // $tool.css('display', 'none')
    }
    
    if ($name.val().length === 0){
        console.log('krotkie to imie')
        nm = false;
    }else{
        console.log('teraz juz troche lepiej ;)')
         nm = true;
    }

    if(!$select.val()){
        console.log('wybierz jakiś kraj')
        country = false;
    }else{
        console.log('powinno być git')
        country = true;
    }

    if($check.is(':checked')){
        console.log('zaznaczone')
        isChecked = true;
        // alert('zaznaczone:)')
    }else{
        console.log('zaakceptuj regulamin ośle')
        isChecked = false;
    }
    nm && em && country && isChecked? alert("szerokiej drogi"): alert('cos tutaj nie gra;(')

        
})






