const hello = $('h1')
hello.on('click', ()=>{
    // alert('jquerry działa ;)')
    $regTool.show('fast');
} )


const $reg = $('.register')
const $name = $('input[type="text"]')
const $email = $('input[type="email"]')
const $select = $('select');
const $check = $('input[type="checkbox"]')
const $nameTool = $('#name')
const $emailTool = $('#email');
const $regTool = $('#reg');
const $countryTool = $('#country')

let nm;
let em;
let country;
let isChecked



$reg.on('click',() => {
    if ($email.val().indexOf('@') === -1){
        console.log('to nie jest email')
        em = false;   
        $emailTool.show('fast')
    }else{
        console.log('to jest email')
        em = true;
        $emailTool.hide('slow')
    }
    
    if ($name.val().length === 0){
        console.log('krotkie to imie')
        nm = false;
        $nameTool.show('fast')

    }else{
        console.log('teraz juz troche lepiej ;)')
         nm = true;
         $nameTool.hide('slow')

    }

    if(!$select.val()){
        console.log('wybierz jakiś kraj')
        country = false;
        $countryTool.show('fast')
    }else{
        console.log('powinno być git')
        country = true;
        $countryTool.hide('slow')
    }

    if(!$check.is(':checked')){
        console.log('zaznaczone')
        isChecked = false;
        // alert('zaznaczone:)')
        $regTool.show('fast')
    }else{
        console.log('zaakceptuj regulamin ośle')
        isChecked = true;
        $regTool.hide('slow')
    }
    nm && em && country && isChecked? alert("szerokiej drogi"): alert('cos tutaj nie gra;(')

        
})

// $check.on('change', ()=>{
//     if($check.is(':checked')){
//         console.log('tralalala')
//     }else{
//         console.log("bleee")
//     }
// })




