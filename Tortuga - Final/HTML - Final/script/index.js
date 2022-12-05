let link01 =  "https://www.youtube.com/embed/kasUtDtUFrI" 
let link02 = "https://www.youtube.com/embed/s6Z73NNXQ-g"  
let link03 = "https://www.youtube.com/embed/kasUtDtUFrI"    
let link04 = "https://www.youtube.com/embed/s6Z73NNXQ-g" 
let link05 = "https://www.youtube.com/embed/kasUtDtUFrI"    
let link06 = "https://www.youtube.com/embed/s6Z73NNXQ-g"   
let link07 = "https://www.youtube.com/embed/kasUtDtUFrI"    
let link08 = "https://www.youtube.com/embed/s6Z73NNXQ-g"   
let link09 = "https://www.youtube.com/embed/kasUtDtUFrI"    
let link10 = "https://www.youtube.com/embed/kasUtDtUFrI"    


// scascascasc

function verify_url() {
    let header_value = document.title
    console.log(header_value)
    if(header_value == "Ciências"){
        document.getElementById("title").innerHTML = "Ciências: "
        
    }else if(header_value == "Geografia"){
         document.getElementById("title").innerHTML = "Geografia: "

    }else if(header_value == "historia"){
         document.getElementById("title").innerHTML = "historia: "

    }else if(header_value == "Matemática"){
         document.getElementById("title").innerHTML = "Matemática: "
         
    }else if(header_value == "Português"){
         document.getElementById("title").innerHTML = "Português: "
    }else {
        alert("pagina nao encontrada")
    }
}

function change_page(id){
    console.log(id)
    if(id == "ciencias"){
        alert("pagina de ciencias")
        window.location = "./ciencias.html"

    }else if(id == "geografia"){
        alert("pagina de geografia")
        window.location = "./geografia.html"

    }else if(id == "historia"){
        alert("pagina de historia")
        window.location = "./historia.html"

    }else if(id == "matematica"){
        alert("pagina de matematica")
        window.location = "./matematica.html"

    }else if(id == "portugues"){
        alert("pagina de portugues")
        window.location = "./portugues.html"

    }else {
        alert("pagina nao encontrada")
    }
}


function change_url(number) {
    console.log(number)
    if(number == '1') {
        console.log(number)
        var edit_save = document.getElementById("player").src=link01;
        console.log(edit_save)
    }else if(number == "2") {
        var edit_save = document.getElementById("player").src=link02;
    }else if(number == "3") {
        var edit_save = document.getElementById("player").src=link03;
    }else if(number == "4") {
        var edit_save = document.getElementById("player").src=link04
    
    }else if(number == "5") {
        var edit_save = document.getElementById("player").src=link05;
    
    }else if(number == "6") {
        var edit_save = document.getElementById("player").src=link06;
    
    }else if(number == "7") {
        var edit_save = document.getElementById("player").src=link07;
    
    }else if(number == "8") {
        var edit_save = document.getElementById("player").src=link08;
    
    }else if(number == "9") {
        var edit_save = document.getElementById("player").src=link09;
    
    }else if(number == "10") {
        var edit_save = document.getElementById("player").src=link10;
    }
}