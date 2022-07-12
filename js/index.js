$(document).ready(function(){
let burg = $('.burger');


burg.click(function(){
        $('.span_burger2').toggleClass('hidden')
        $('.burger').toggleClass('transform_rotate')
        $('.menu_mobile').toggleClass('d-flex')

        
    })



const change_icon = $('.change_icon');

let from_punkt1 = $('.from_punkt1');
let from_punkt1_text = from_punkt1.textContent;

let from_punkt2 = $('.from_punkt2');

let from_punkt2_text = from_punkt2.textContent;


change_icon.click(function(){

    from_punkt1.innerText = from_punkt2_text
    console.log(from_punkt1_text)
})

});