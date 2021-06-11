document.getElementById("divfunzioni").addEventListener("mouseover",function(event){
  var divfunzioni=document.getElementById("divfunzioni");
  divfunzioni.style.width="20%";
  divfunzioni.style.height="37%";
  divfunzioni.style.left="13%";
  divfunzioni.style.top="36.5%";
})
document.getElementById("divfunzioni").addEventListener("mouseleave",function(event){
  var divfunzioni=document.getElementById("divfunzioni")
  divfunzioni.style.width="16%";
  divfunzioni.style.height="30%";
  divfunzioni.style.left="15%";
  divfunzioni.style.top="40%";
})
document.getElementById("divtrig").addEventListener("mouseover",function(event){
    var divtrig=document.getElementById("divtrig")
  divtrig.style.width="20%";
  divtrig.style.height="37%";
  divtrig.style.left="40%";
  divtrig.style.top="36.5%";
})
document.getElementById("divtrig").addEventListener("mouseleave",function(event){
    var divtrig=document.getElementById("divtrig")
  divtrig.style.width="16%";
  divtrig.style.height="30%";
  divtrig.style.left="42%";
  divtrig.style.top="40%";
})
document.getElementById("divnumcomp").addEventListener("mouseover",function(event){
    var divnumcomp=document.getElementById("divnumcomp")
  divnumcomp.style.width="20%";
  divnumcomp.style.height="37%";
  divnumcomp.style.right="13%";
  divnumcomp.style.top="36.5%";
})
document.getElementById("divnumcomp").addEventListener("mouseleave",function(event){
    var divnumcomp=document.getElementById("divnumcomp")
  divnumcomp.style.width="16%";
  divnumcomp.style.height="30%";
  divnumcomp.style.right="15%";
  divnumcomp.style.top="40%";
})
function cal(){
    if(document.getElementById("calcolatrice").style.display=='block'){
        document.getElementById("calcolatrice").style.display="none";
    }
    else{
        document.getElementById("calcolatrice").style.display="block";
    }
}    
function n(dato){ 
    document.getElementById("operazioni").value+=dato;
}

function operazione() { 
    if(document.getElementById("operazioni").value=='0000'){
        location.href="../uovoDiPasqua/tetris.html";
    }
    else if(document.getElementById("operazioni").value=='1234'){
        location.href="../uovoDiPasqua/uovoDiPasqua.html";
    }
    else{
        document.getElementById("operazioni").value=eval(document.getElementById("operazioni").value);
    }
}

function cancella() { 
    document.getElementById("operazioni").value=""; 
}
