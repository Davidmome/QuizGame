$(document).ready(function(){
    $("#myImage").toggle();

var question1= "Que es Javascript?";
var question2= "Que tipos de datos maneja Javascript";
var question3= "Que es el operador ===?";
var question4= "Cuales son los bucles en Javascript?";
var question5= "Cual seria el resultado de 3+2+'7'?";
var question6= "Que significa NULL?";
var question7= "Para que sirve el operador typeof";
var question8= "Para que sirve la operacion isNaN";

var answer1="Un lenguaje de programacion en el desarrollo de paginas web";
var answer2="String,Booleano,Objeto, Numero, Indefinido";
var answer3="operador de igualdad estricta";
var answer4="for,while,do-while,foreach";
var answer5="57";
var answer6="representa ningún valor o ningún objeto";
var answer7="es un operador que se usa para regresar una descripción de cadena del tipo de una variable.";
var answer8="devuelve verdadero si el argumento no es un número porque de lo contrario arrojaría un falso.";

var myInterval;
var r=0;
var time = 20;
var timeup = "assets/images/timeup.gif";

var a1=['Una pagina web', 'Un lenguaje de programacion para AI', 'Un lenguaje de programacion para robots', 'Una Aplicacion movil'];
var a2=['String,Numero', 'Objeto,indefinido', 'Booleano,indefinido', 'Numero,objeto'];
var a3=['operador de igualdad', 'operador de desigualdad', 'operador de suma', 'operador de resta'];
var a4=['for,while', 'do-while', 'for,foreach', 'while,do-while'];
var a5=['13', '75', '10', '30'];
var a6=['Un valor', 'Un Objeto', 'Una variable', 'Una imagen'];
var a7=['para escribir ', 'para imprimir', 'para multiplicar', 'para sumar'];
var a8=['Devuelve un objeto', 'Devuelve un valor', 'Devuelve una operacion', 'Devuelve una imagen'];

var all = [
    {question:question1, answer:answer1, wronganswer:a1, img1:"assets/images/correct.gif", img2: "assets/images/wrong.png"},
    {question:question2, answer:answer2, wronganswer:a2, img1:"assets/images/correct.gif", img2: "assets/images/wrong.png"},
    {question:question3, answer:answer3, wronganswer:a3, img1:"assets/images/correct.gif", img2: "assets/images/wrong.png"},
    {question:question4, answer:answer4, wronganswer:a4, img1:"assets/images/correct.gif", img2: "assets/images/wrong.png"},
    {question:question5, answer:answer5, wronganswer:a5, img1:"assets/images/correct.gif", img2: "assets/images/wrong.png"},
    {question:question6, answer:answer6, wronganswer:a6, img1:"assets/images/correct.gif", img2: "assets/images/wrong.png"},
    {question:question7, answer:answer7, wronganswer:a7, img1:"assets/images/correct.gif", img2: "assets/images/wrong.png"},
    {question:question8, answer:answer8, wronganswer:a8, img1:"assets/images/correct.gif", img2: "assets/images/wrong.png"},
]

var i=0;
var a=0;
var b=0;
var c=0;
var d=0;

var x;
var y;
var w;
var z;

var newRandom=function(){
    x=Math.floor(Math.random()*4);
    y=Math.floor(Math.random()*4);
    w=Math.floor(Math.random()*4);
    z=Math.floor(Math.random()*4);
    if(x===w||x===y||x===z||w===y||w===z||y===z){
        newRandom();
    }
}

var printQuestion=function(){
    $('.question').text(all[i].question);
}

var printAnswers = function(){
    $('.answers').show();
    $('#answer'+x).text(all[i].wronganswer[r]);
    r++;
    $('#answer'+y).text(all[i].wronganswer[r]);
    r++;
    $('#answer'+w).text(all[i].answer);
    $('#answer'+z).text(all[i].wronganswer[r]);
    $('.text-timer').text('Segundos restantes para responder: ');
    r=0;
}

var timer=function(){
    $('.timer').text(time);
    time--;
    if(time<=-2){
        clearInterval(myInterval);
        time=24;
        $('timer').text(time);
        myTimeout();
        myInterval=setInterval(timer,1000);
        setTimeout(next,5000);
        return;
    }
}

var next = function(){
    if(i>=7){
        gameOver();
    }else{
        $('#myImage').hide();
        $('.result1').hide();
        newRandom();
        printQuestion();
        printAnswers();
        $('.text-timer').show();
        $('timer').show();
        $('.question').show();
        $('.answers').show();
    }
}

function winning (){
    $('#myImage').attr('src', all[i].img1);
    $(".text-timer").hide();
    $(".timer").hide();
    $(".question").hide();
    $(".answers").hide();
    $(".result1").text("Correcto, la respuesta es: ")
    $(".result2").text(all[i].answer);
    $(".result1").show();
    $(".result2").show();
    
    $("#myImage").show();
    i++;
    a++;
}

function loosing (){
    $("#myImage").attr("src",all[i].img2);
    $(".text-timer").hide();
    $(".timer").hide();
    $(".answers").hide();
    $(".question").hide();
    $(".result1").text("Equivocado, la respuesta es: ")
    $(".result2").text(all[i].answer);
    $(".result1").show();
    $(".result2").show();
    $("#myImage").show();
    i++;
    b++;
}

function myTimeout(){
  
    $("#myImage").attr("src",timeup);
    $(".text-timer").hide();
    $(".timer").hide();
    $(".answers").hide();
    $(".question").hide();
    $(".result1").text("Se acabo el tiempo, La respuesta era : ");
    $(".result2").text(all[i].answer);
    $(".result1").show();
    $(".result2").show();
    $("#myImage").show();
    i++;
    c++;
  }

  function gameOver(){
    clearInterval(myInterval);
    time=20;
    $(".text-timer").text("Correct Answers: "+a);
    $(".text-timer").show();
    $(".timer").text("Incorrect Answers: "+b);
    $(".timer").show();
    $("#myImage").hide();
    $(".answers").empty();
    $(".result2").text("Unanswered: "+c);
    $(".result2").show();
    $(".result1").text("Tus resultados son: ");
    $(".result1").show();
    $(".question").hide();
    $(".btn").show()
    $(".btn").text("Empezar de nuevo?")
    $(".answers").hide();
    i=0;
    a=0;
    b=0;
    c=0
  }

  $(".btn").on("click", function() {
    $(".timer").empty();
    $(".btn").hide();
    $(".result1").hide();
    $(".result2").hide();
    newRandom();
    printQuestion();
    printAnswers();
    clearInterval(myInterval);
    myInterval= setInterval(timer,1000);
    
  

  })
  $(".answers").on("click", function() {
    var guess = $(this).text();
    var guess2= $("#answer"+w).text();
    
    if(guess===guess2){
        winning();
        setTimeout(next,5000);
        clearInterval(myInterval);
        time=24;
        myInterval=setInterval(timer,1000);
    }
    else{ 
        loosing();
         setTimeout(next,5000);

         clearInterval(myInterval);
         time=24;
         myInterval=setInterval(timer,1000);

        
       }

})

})