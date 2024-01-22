var matriz = [[0,0,0],
              [0,0,0],
              [0,0,0],];

var contp1 = 0;
var contp2 = 0;

function testaMatriz () {
    var teste = 0;
    teste += testaDiagonal();
    teste += testaHorizontal();
    teste += testaVertical();
    return teste;
}

function testaDiagonal(){
    if (matriz[1][1] && ((matriz[1][1]==matriz[0][0] && matriz[1][1]==matriz[2][2])||(matriz[1][1]==matriz[2][0] && matriz[1][1]==matriz[0][2])))
        return matriz[1][1];
    return 0;
}

function testaHorizontal(){
    if (matriz[0][0] && (matriz[0][0]==matriz[0][1] && matriz[0][0]==matriz[0][2]))
        return matriz[0][0];
    if (matriz[1][0] && (matriz[1][0]==matriz[1][1] && matriz[1][0]==matriz[1][2]))
        return matriz[1][0];
    if (matriz[2][0] && (matriz[2][0]==matriz[2][1] && matriz[2][0]==matriz[2][2]))
        return matriz[2][0];
    return 0;
}

function testaVertical(){
    if (matriz[0][0] && (matriz[0][0]==matriz[1][0] && matriz[0][0]==matriz[2][0]))
        return matriz[0][0];
    if (matriz[0][1] && (matriz[0][1]==matriz[1][1] && matriz[0][1]==matriz[2][1]))
        return matriz[1][0];
    if (matriz[0][2] && (matriz[0][2]==matriz[1][2] && matriz[0][2]==matriz[2][2]))
        return matriz[2][0];
    return 0;
}

var vez = 0;
cont = 0;
for (var i = 0; i < document.getElementsByClassName("btn").length; i++) {
    document.getElementsByClassName("btn")[i].setAttribute("linha", Math.floor(i / 3));
    document.getElementsByClassName("btn")[i].setAttribute("coluna", i % 3);
}
    
for (var i = 0; i < document.getElementsByClassName("btn").length; i++) {
    document.getElementsByClassName("btn")[i].addEventListener("click", function(){
        document.getElementById("win1").style.display = "none";
        document.getElementById("win2").style.display = "none";
        document.getElementById("draw").style.display = "none";

        var j = parseInt(this.getAttribute("linha"));
        var k = parseInt(this.getAttribute("coluna"));
        if (matriz[j][k]===0){
            this.innerHTML = xOuBolinha(vez%2);
            matriz[j][k]=vez%2+1;
            vez++;
            cont++;
        }
        var teste = testaMatriz();
        
        if (cont===9){
            empate()
        }
        if (teste){
            vitoria(teste===1? 1 : 2);
        }
    });
}

function xOuBolinha (n){
    var conteudo = n === 1 ? "O" : "X";
    if (n) {
        document.getElementById("vezX").style.display = "block";
        document.getElementById("vezO").style.display = "none";
    }
    else {
        document.getElementById("vezO").style.display = "block";
        document.getElementById("vezX").style.display = "none";
    }
    return conteudo;
}

function vitoria(n){
    reset ();
    if (n===1){
        document.getElementById("win1").style.display = "block";
        contp1++;
        document.getElementById("p1").innerHTML= contp1;
    } 
    else {
        document.getElementById("win2").style.display = "block";
        contp2++;
        document.getElementById("p2").innerHTML= contp2;
    }
}

function empate (){
    reset ();
    document.getElementById("draw").style.display = "block";
}

function reset () {
    for (var i = 0; i < document.getElementsByClassName("btn").length; i++) {
        document.getElementsByClassName("btn")[i].innerHTML = "-";
    }
    matriz = [[0,0,0],
              [0,0,0],
              [0,0,0],];
    cont = 0;
}