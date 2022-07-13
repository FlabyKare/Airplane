$(document).ready(function(){
let burg = $('.menu_open');


burg.click(function(){
        $('.span_burger2').toggleClass('hidden')
        //$('.menu_open').toggleClass('transform_rotate')
        $('.menu_mobile').toggleClass('d-flex')
        $('body').toggleClass('overflow_hidden')
    })

    let menu_mobile_open = $('.menu_mobile_open');


    menu_mobile_open.click(function(){
        $('.span_burger2').toggleClass('hidden')
        //$('.menu_open').toggleClass('transform_rotate')
        $('.menu_mobile').toggleClass('d-flex')
        $('body').toggleClass('overflow_hidden')
    })















    
// Смена городов местами
let 
from_punkt1 = document.querySelector('.from_punkt1'),
from_punkt2 = document.querySelector('.from_punkt2'),
from_punkt3 = document.querySelector('.from_punkt3'),
from_punkt4 = document.querySelector('.from_punkt4'),
btn = document.querySelector('.change_icon')


btn.addEventListener('click',function () {
let text1 = from_punkt1.textContent;
let text2 = from_punkt2.textContent; 
let text3 = from_punkt3.textContent; 
let text4 = from_punkt4.textContent; 
from_punkt1.textContent = text2
from_punkt2.textContent = text1

from_punkt3.textContent = text4
from_punkt4.textContent = text3


})









});