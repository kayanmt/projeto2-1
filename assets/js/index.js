//Optei por deixar aleatorio, pois acreditei que melhor um jogo aleatorio, como uma "advinhação".

function trocaDeImagemJS(){
    i=Math.round(Math.random() * (3 - 1) + 1);
    
    if( i==3){
    document.getElementById("img").src="https://observatorio3setor.org.br/wp-content/uploads/2021/07/1-panda.jpg";
    document.getElementById("Panda").textContent="Bravo";
    }
    
    if(i==1){
    document.getElementById("img").src="https://s.calendarr.com/upload/datas/pa/nd/panda-vermelho-topo2-zoo_c.jpg?auto_optimize=low&width=640";
    document.getElementById("Panda").textContent="Vermelho!!!";
    }

    if(i==2){
    document.getElementById("img").src="https://thejigsawpuzzles.com/img-puzzle-341361-400/Panda-plus-Bamboo-equals-Lazy-Panda";
    document.getElementById("Panda").textContent="Preguiçoso";}

    }