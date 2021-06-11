document.getElementById("DefNC").addEventListener("click",function(event){
  document.getElementById("SpiegazioneNC").textContent=" ";
  document.getElementById("SpiegazioneNC").innerHTML="<h2>DEFINIZIONE</h2><br>Un numero complesso è un numero z del tipo:<br>z=a+ib	→  FORMA ALGEBRICA DEL NUMERO z<br>a ∈ R   →   a = parte reale<br>ib ∈ I   →    ib = parte immaginaria<br>REGOLA PRINCIPALE:<br>i² = -1<br>CASI PARTICOLARI:<br><ul><li>Se b=0 allora z=a+ib = a</li><li>-Se a=0 allora z=a+ib = ib</li></ul>";
})
document.getElementById("ConfNC").addEventListener("click",function(event){
  document.getElementById("SpiegazioneNC").textContent=" ";
  document.getElementById("SpiegazioneNC").innerHTML="<h2>UGUAGLIANZA TRA NUMERI <br>COMPLESSI:</h2><br>Due numeri complessi sono uguali se hanno la stessa<br> parte reale e la stessa parte immaginaria.<br>z₁ = a₁+ib₁<br>z₂ = a₂+ib₂<br>z₁ = z₂  ↔  a₁ = a₂  ʌ  b₁ = b₂<br>";
})
document.getElementById("ModNC").addEventListener("click",function(event){
  document.getElementById("SpiegazioneNC").textContent=" ";
  document.getElementById("SpiegazioneNC").innerHTML="<h2>MODULO DI UN NUMERO <br>COMPLESSO</h2><br>Il modulo di un numero complesso è la radice quadrata<br> della somma del quadrato della parte reale e di quello<br> della parte immaginaria.<br>|z| = √a²+b²<br>Due numeri complessi sono COMPLESSI CONIUGATI<br> se hanno la stessa parte reale e la parte <br>immaginaria opposta.<br>&emsp;Es.:  4+3i , 4-3i<br>&emsp;&emsp;Due numeri complessi sono COMPLESSI OPPOSTI<br>&emsp;&emsp;&emsp;se hanno sia la parte reale che la parte immaginaria <br>&emsp;&emsp;&emsp;&emsp;opposta.<br>&emsp;&emsp;&emsp;&emsp;&emsp; Es.:  4+3i , -4-3i<br>";
})
document.getElementById("AddNC").addEventListener("click",function(event){
  document.getElementById("SpiegazioneNC").textContent=" ";
  document.getElementById("SpiegazioneNC").innerHTML="<h2>ADDIZIONE</h2><br>(7-3i)+(5+4i) = (7+5)+(-3+4)i = 12+i<br>Per sommare due numeri complessi bisogna sommare le<br> parti reali e le parti immaginarie.<br>(3+i)+(3-i) = (3+3)+(i-i) = 6<br>Se sommiamo tra loro due complessi coniugati otteniamo<br> come risultato il doppio della parte reale.<br>(5+2i)+(-5-2i) = 0<br>Se sommiamo tra loro due complessi opposti otteniamo<br> come risultato 0.<br>";
})
document.getElementById("SotNC").addEventListener("click",function(event){
  document.getElementById("SpiegazioneNC").textContent=" ";
  document.getElementById("SpiegazioneNC").innerHTML="<h2>SOTTRAZIONE</h2><br>(12+3i)-(8+4i) = (12-8)+(3-4)i = 4-i<br>Per sottrarre due numeri complessi bisogna fare la<br> differenza tra le parti reali e le parti immaginarie.<br>(3+i)-(3-i) = (3-3)+(i-(-i) = 0+(i+i) = 2i<br>Se sottraiamo tra loro due complessi coniugati otteniamo<br> come risultato il doppio della parte immaginaria.<br>(5+2i)-(-5-2i) = 0<br>Se sottraiamo tra loro due complessi opposti otteniamo<br> come risultato il doppio della parte reale ed il doppio <br>&emsp;della parte immaginaria.<br>";
})
document.getElementById("MoltNC").addEventListener("click",function(event){
  document.getElementById("SpiegazioneNC").textContent=" ";
  document.getElementById("SpiegazioneNC").innerHTML="<h2>MOLTIPLICAZIONE</h2><br>(7+2i)(3-i) = 21-7i+6i-2i² = 21-i+2 = 23-i<br>(1+4i)(1-4i) = 1+16 = 17<br>Se moltiplichiamo due complessi coniugati otteniamo<br> come risultato la somma del quadrato della parte reale e <br>di quello della parte immaginaria.<br>";
})
document.getElementById("RecNC").addEventListener("click",function(event){
  document.getElementById("SpiegazioneNC").textContent=" ";
  document.getElementById("SpiegazioneNC").innerHTML="<h2>RECIPROCO</h2><br>z=a+ib<br>1/z = 1/a+ib * a-ib/a-ib = a-ib/a²+b²<br>";
})
document.getElementById("DivNC").addEventListener("click",function(event){
  document.getElementById("SpiegazioneNC").textContent=" ";
  document.getElementById("SpiegazioneNC").innerHTML="<h2>DIVISIONE</h2><br>Es.:<br>(3-2i):(4+i) = 3-2i/4+i = 3-2i* 1/4+i = 3-2i*1/4+i * 4-i/4-i = <br>=(3-2i)* 4-i/16+1 = (3-2i)(4-i)/17 = 12-3i-8i-2 / 17 = <br>=10-11i / 17<br>";
})
document.getElementById("PotNC").addEventListener("click",function(event){
  document.getElementById("SpiegazioneNC").textContent=" ";
  document.getElementById("SpiegazioneNC").innerHTML="<h2>POTENZA (QUADRATO / CUBO)</h2><br>Quadrato<br>(2+6i)² = 4+24i-36 = 24i-32<br>Cubo<br>(3+2i)³ = 27+54i-36-8i = 46i-9<br>";
})