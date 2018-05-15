var auto = document.getElementById('auto');//object auto koppeld aan plaatje
auto.style.position='abdolute';
auto.style.left='650px';
auto.style.top='800px';

function starten(){
    auto.style.top = parselnt(auto.style.top)-5+'px';
}

function opnieuw(){
    auto.style.top = '800px';
}