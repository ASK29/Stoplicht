// auto 1
var auto = document.getElementById('autoob');
auto.style.position = 'absolute';
auto.style.left = '650px';
auto.style.top = '800px';

// auto 2
var autobb = document.getElementById('autobb');
autobb.style.position = 'absolute';
autobb.style.left = '555px';
autobb.style.top = '-80px';

// auto 3
var autorl = document.getElementById('autorl');
autorl.style.position = 'absolute';
autorl.style.left = '1400px';
autorl.style.top = '375px';

// auto 4
var autolr = document.getElementById('autolr');
autolr.style.position = 'absolute';
autolr.style.left = '-200px';
autolr.style.top = '412px';

// var's
var snelheid = 5;
var snelheid1 = 5;
var snelheid2 = 5;
var snelheid3 = 5;
var rijden;
var werken;
var buitenwerking;
var stop;
var stop2;

// stoplicht 1
var stoplicht = document.getElementById('stoplicht');
stoplicht.style.position='absolute';
stoplicht.style.left='713px';
stoplicht.style.top='505px';
// stoplicht.style.transform = 'rotate(180deg)';


// stoplicht 2
var stoplicht2 = document.getElementById('stoplicht2');
stoplicht2.style.position='absolute';
stoplicht2.style.left='506px';
stoplicht2.style.top='305px';
stoplicht2.style.transform = 'rotate(180deg)';



// stoplicht 3
var stoplicht3 = document.getElementById('stoplicht3');
stoplicht3.style.position='absolute';
stoplicht3.style.left='728px';
stoplicht3.style.top='320px';
stoplicht3.style.transform = 'rotate(270deg)';

// stoplicht 4
var stoplicht4 = document.getElementById('stoplicht4');
stoplicht4.style.position='absolute';
stoplicht4.style.left='491px';
stoplicht4.style.top='488px';
stoplicht4.style.transform = 'rotate(90deg)';




// start function
function starten()
{
    auto.style.top = parseInt(auto.style.top) - snelheid + 'px';
    autobb.style.top = parseInt(autobb.style.top) + snelheid1 + 'px';
    autorl.style.left = parseInt(autorl.style.left) - snelheid2 + 'px';
    autolr.style.left = parseInt(autolr.style.left) + snelheid3 + 'px';
    if(auto.style.top === '-80px'){
        auto.style.top = '800px';
    }
    if(autobb.style.top === '800px'){
        autobb.style.top = '-80px';
    }
    if(autorl.style.left === '-200px'){
        autorl.style.left = '1400px';
    }
    if(autolr.style.left === '1500px'){
        autolr.style.left = '-200px';
    }
    rijden = setTimeout(starten,10);

    if(auto.style.top === '550px' && stop === true){
        // if(auto.style.top === '550px'){
        snelheid = 0;
    }else{
        snelheid = 5;
    }
    if(autobb.style.top === '280px' && stop === true){
        snelheid1 = 0;
    }else{
        snelheid1 = 5;
    }
    if(autolr.style.left === '300px' && stop2 === true){
        snelheid3 = 0;
    }else{
        snelheid3 = 5;
    }
    if(autorl.style.left === '750px' && stop2 === true){
        snelheid2 = 0;
    }else{
        snelheid2 = 5;
    }
}

// stop function
function stoppen()
{
    clearTimeout(rijden)
}

// opnieuw function
function opnieuw()
{
    auto.style.top = '800px';
    autobb.style.top = '-80px';
    autorl.style.left = '1400px';
    autolr.style.left = '-200px'
}

// stoplicht

function aanzetten()
{
    clearTimeout(buitenwerking);
    maakRood();
    maakRood1();
    werken = setTimeout(maakGroen, 2000);
    werken = setTimeout(maakGeel, 6000);
    werken = setTimeout(maakRood, 8000);
    werken = setTimeout(maakGroen1, 10000);
    werken = setTimeout(maakGeel1, 14000);
    werken = setTimeout(aanzetten, 16000);


}

function knipperen() {
    clearTimeout(werken);
    maakGeel();
    buitenwerking = setTimeout(ZetUit, 500);
    buitenwerking = setTimeout(knipperen, 1000);
    buitenwerking = setTimeout(ZetUit, 1500);
    buitenwerking = setTimeout(knipperen, 1000);
}
function uitzetten() {
    ZetUit();
    clearTimeout(buitenwerking);
    clearTimeout(werken);
}



// stoplicht 0
function maakRood() {
    stoplicht.src="stoplichtrood.png";
    stoplicht2.src="stoplichtrood.png";
    stop = true;

}
function maakGeel() {
    stoplicht.src="stoplichtgeel.png";
    stoplicht2.src="stoplichtgeel.png";
}
function maakGroen() {
    stoplicht.src = "stoplichtgroen.png";
    stoplicht2.src = "stoplichtgroen.png";
    stop = false;
}

// stoplicht 1
function maakRood1() {
    stoplicht3.src="stoplichtrood.png";
    stoplicht4.src="stoplichtrood.png";
    stop2 = true;

}
function maakGeel1() {
    stoplicht3.src="stoplichtgeel.png";
    stoplicht4.src="stoplichtgeel.png";
}
function maakGroen1() {
    stoplicht3.src="stoplichtgroen.png";
    stoplicht4.src="stoplichtgroen.png";
    stop2 = false;

}

function ZetUit() {
    stoplicht.src="stoplichtuit.png";
    stoplicht2.src="stoplichtuit.png";
    stoplicht3.src="stoplichtuit.png";
    stoplicht4.src="stoplichtuit.png";
}

// //<-------------------------------------------------------------------------------------------------------------------->
//
// // Autotje 1//
// //
// // var auto = document.getElementById('auto');                             //object auto1 koppeld aan plaatje
// // auto.style.position='absolute';
// // auto.style.left='650px';
// // auto.style.top='800px';
// //
// // function starten(){
// //     auto.style.top = parseInt(auto.style.top) - 5 + 'px';
// // }
// //
// // function opnieuw(){
// //     auto.style.top ='800px';
// // }
//
//
//
// //<-------------------------------------------------------------------------------------------------------------------->
//
// //Autotje 2//
//
// var rijden;                                                                //animatie heet rijden
// var auto1 = document.getElementById('auto1');                             //object auto2 koppeld aan plaatje
// auto1.style.position='absolute';
// auto1.style.left='650px';
// auto1.style.top='800px';
//
// function starten(){
//     auto1.style.top = parseInt(auto1.style.top) - 5 + 'px';
//     rijden = setTimeout(starten,10);                                       //om de 10 msec starten() aanroepen
// }
// function stop() {
//     clearTimeout(rijden);
// }
//
// function opnieuw(){
//     clearTimeout(rijden);
//     auto1.style.top ='800px';
// }
//
//
//
//
//
//
//
// var rijd;                                                                //animatie heet rijden
// var auto2 = document.getElementById('auto1');                             //object auto2 koppeld aan plaatje
// auto1.style.position='absolute';
// auto1.style.left='650px';
// auto1.style.top='800px';
//
// function starten(){
//     auto1.style.top = parseInt(auto2.style.top) - 5 + 'px';
//     rijd = setTimeout(starten,10);                                       //om de 10 msec starten() aanroepen
// }
// function stop() {
//     clearTimeout(rijden);
// }
//
// function opnieuw(){
//     clearTimeout(rijden);
//     auto2.style.top ='800px';
// }
//
// //
// //
// // //<-------------------------------------------------------------------------------------------------------------------->
// //
// // //Stoplicht 1//
// //
// // function veranderStoplicht(){
// //     var stoplicht = document.getElementById('stoplicht');
// //     if(stoplicht.src.match("Stoplichtrood")){
// //         stoplicht.src ="stoplichtgroen.png";
// //     }else{
// //         stoplicht.src ="stoplichtrood.png";
// //     }
// // }
// //
// // //<-------------------------------------------------------------------------------------------------------------------->
// //
// // //Stoplicht 2//
// //
// // var stoplicht2=document.getElementById('stoplicht');
// //
// // fuction maakRood(){
// //     stoplicht2.src="stoplichtrood.png";
// // }
// // function maakGroen() {
// //     ...
// //
// // }
// // function... {
// //     ...
// // }
// // function zetUit(){
// //     ...
// // }
//
//
//
// // //<-------------------------------------------------------------------------------------------------------------------->
// //
// // //Stoplicht 3//
// //
// //
// // var stoplicht3=document.getElementById('stoplicht');
// // stoplicht3.style.position='absolute';
// // stoplicht3.style.left= '715px';
// // stoplicht3.style.top='510px';
// //
// // function maakRood(){
// //     stoplicht3.src="stoplichtrood.png";
// // }
// // function maakGroen() {
// //     stoplicht3.src="stoplichtgroen.png";
// // }
// // function maakGeel() {
// //     stoplicht3.src="stoplichtgeel.png";
// // }
// // function zetUit() {
// //     stoplicht3.src="stoplichtuit.png";
// // }
//
// //<-------------------------------------------------------------------------------------------------------------------->
//
//
// // Stopicht 4//
//
//
// var werken;             //animatie heet'werken'
// var buitenwerking;      //andere animatie heet 'buitenwerking'
// var stoplicht = document.getElementById('stoplicht');
// stoplicht.style.position = 'absolute';
// stoplicht.style.left = '715px';
// stoplicht.style.top = '510px';
//
// function aanzetten(){
//     clearTimeout(buitenwerking);
//     maakRood();
//     werken = setTimeout(maakGroen, 4000);                //na 4 sec(4000 msec) groen maken
//     werken = setTimeout(maakGeel, 8000);                 //na 8 sec geel maken
//     werken = setTimeout(aanzetten, 10000);               // en na 10 sec opnieuw aanzetten
// }
// function knipperen() {
//     clearTimeout(werken);
//     maakGeel();
//     buitenwerking =setTimeout(zetUit, 500);               //na 500 msec uitzetten
//     buitenwerking =setTimeout(knipperen, 1000);           //na 500 msec weer knipperen
// }
//
// function uitzetten() {
//     //Deze functie zet de animaties van het stoplicht uit
//     //dat is ander dat dat de functie zetUit()doet zetUIt();
//     clearTimeout(buitenwerking);
//     clearTimeout(werken);
// }
//
// function maakRood() {
//     stoplicht.src ="stoplichtrood.png";
// }
//
// function maakGroen () {
//     stoplicht.src ="stoplichtgroen.png";
//
// }
//
// function maakGeel () {
//     stoplicht.src ="stoplichtgeel.png";
//
// }
//
// function zetUit() {
//     // deze funtie laat het plaatje met alle lampjes uit zetten.
//     //niet verwarren met de functie uitzetten()
//     stoplicht.src="stoplichtuit.png"
//
// }
//
//
//
//
//
// function maakRoodGroen() {
//     stoplicht.src="stoplichtrood.png";
//     stoplicht2.src="stoplichtrood2.png";
//     stoplicht3.src="stoplichtrood3.png";
//     stoplicht4.src="stoplichtrood4.png";
//     slir_lr=true;
//     slir_bb=false;
// }
//
//
// //<-------------------------------------------------------------------------------------------------------------------->
//
