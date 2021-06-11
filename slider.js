var slider = document.getElementById("myRange");
slider.oninput = function() {
    switch(true){
        case (this.value<15): document.getElementById("dom").style.display="block";document.getElementById("simm").style.display="none";document.getElementById("segn").style.display="none";document.getElementById("asin").style.display="none";document.getElementById("graProbabil").style.display="none";document.getElementById("graficoProb").style.display="none";document.getElementById("calcoloDeriv").style.display="none";document.getElementById("studSegnDeriv").style.display="none";document.getElementById("domin").style.color="orange";document.getElementById("evenSimm").style.color="black";document.getElementById("studSegn").style.color="black";document.getElementById("limiTiF").style.color="black";document.getElementById("deduZGR").style.color="black";document.getElementById("calcDELleDer").style.color="black";document.getElementById("SegnODErPR").style.color="black";break;
        case (this.value>15 && this.value<27): document.getElementById("dom").style.display="none";document.getElementById("simm").style.display="block";document.getElementById("segn").style.display="none";document.getElementById("asin").style.display="none";document.getElementById("graProbabil").style.display="none";document.getElementById("graficoProb").style.display="none";document.getElementById("calcoloDeriv").style.display="none";document.getElementById("dom").style.display="none";document.getElementById("studSegnDeriv").style.display="none";document.getElementById("domin").style.color="black";document.getElementById("evenSimm").style.color="orange";document.getElementById("studSegn").style.color="black";document.getElementById("limiTiF").style.color="black";document.getElementById("deduZGR").style.color="black";document.getElementById("calcDELleDer").style.color="black";document.getElementById("SegnODErPR").style.color="black";break;
        case (this.value>27 && this.value<34): document.getElementById("dom").style.display="none";document.getElementById("simm").style.display="none";document.getElementById("segn").style.display="block";document.getElementById("asin").style.display="none";document.getElementById("graProbabil").style.display="none";document.getElementById("graficoProb").style.display="none";document.getElementById("calcoloDeriv").style.display="none";document.getElementById("studSegnDeriv").style.display="none";document.getElementById("domin").style.color="black";document.getElementById("evenSimm").style.color="black";document.getElementById("studSegn").style.color="orange";document.getElementById("limiTiF").style.color="black";document.getElementById("deduZGR").style.color="black";document.getElementById("calcDELleDer").style.color="black";document.getElementById("SegnODErPR").style.color="black";break;
        case(this.value>34 && this.value<53): document.getElementById("dom").style.display="none";document.getElementById("simm").style.display="none";document.getElementById("segn").style.display="none";document.getElementById("asin").style.display="block";document.getElementById("graProbabil").style.display="none";document.getElementById("graficoProb").style.display="none";document.getElementById("calcoloDeriv").style.display="none";document.getElementById("studSegnDeriv").style.display="none";document.getElementById("domin").style.color="black";document.getElementById("evenSimm").style.color="black";document.getElementById("studSegn").style.color="black";document.getElementById("limiTiF").style.color="orange";document.getElementById("deduZGR").style.color="black";document.getElementById("calcDELleDer").style.color="black";document.getElementById("SegnODErPR").style.color="black";break;
        case(this.value>53 && this.value<67):document.getElementById("dom").style.display="none";document.getElementById("simm").style.display="none";document.getElementById("segn").style.display="none";document.getElementById("asin").style.display="none";document.getElementById("graProbabil").style.display="block";document.getElementById("graficoProb").style.display="block";document.getElementById("calcoloDeriv").style.display="none";document.getElementById("studSegnDeriv").style.display="none";document.getElementById("domin").style.color="black";document.getElementById("evenSimm").style.color="black";document.getElementById("studSegn").style.color="black";document.getElementById("limiTiF").style.color="black";document.getElementById("deduZGR").style.color="orange";document.getElementById("calcDELleDer").style.color="black";document.getElementById("SegnODErPR").style.color="black";break;
        case(this.value>67 && this.value<80):document.getElementById("dom").style.display="none";document.getElementById("simm").style.display="none";document.getElementById("segn").style.display="none";document.getElementById("asin").style.display="none";document.getElementById("graProbabil").style.display="none";document.getElementById("graficoProb").style.display="none";document.getElementById("calcoloDeriv").style.display="block";document.getElementById("studSegnDeriv").style.display="none";document.getElementById("domin").style.color="black";document.getElementById("evenSimm").style.color="black";document.getElementById("studSegn").style.color="black";document.getElementById("limiTiF").style.color="black";document.getElementById("deduZGR").style.color="black";document.getElementById("calcDELleDer").style.color="orange";document.getElementById("SegnODErPR").style.color="black";break;
        case(this.value>80 && this.value<100):document.getElementById("dom").style.display="none";document.getElementById("simm").style.display="none";document.getElementById("segn").style.display="none";document.getElementById("asin").style.display="none";document.getElementById("graProbabil").style.display="none";document.getElementById("graficoProb").style.display="none";document.getElementById("calcoloDeriv").style.display="none";document.getElementById("studSegnDeriv").style.display="block";document.getElementById("domin").style.color="black";document.getElementById("evenSimm").style.color="black";document.getElementById("studSegn").style.color="black";document.getElementById("studSegn").style.color="black";document.getElementById("limiTiF").style.color="black";document.getElementById("deduZGR").style.color="black";document.getElementById("calcDELleDer").style.color="black";document.getElementById("SegnODErPR").style.color="orange";break;

    }
}
document.getElementById("dominioLink").addEventListener("mouseover",function(event){
  document.getElementById("Wikidom").style.display="block";
})
document.getElementById("dominioLink").addEventListener("mouseleave",function(event){
  document.getElementById("Wikidom").style.display="none";
})
document.getElementById("funPari").addEventListener("mouseover",function(event){
  document.getElementById("WikiFunzPari").style.display="block";
})
document.getElementById("funPari").addEventListener("mouseleave",function(event){
  document.getElementById("WikiFunzPari").style.display="none";
})
//fundisp
document.getElementById("fundisp").addEventListener("mouseover",function(event){
  document.getElementById("WikiFunzdis").style.display="block";
})
document.getElementById("fundisp").addEventListener("mouseleave",function(event){
  document.getElementById("WikiFunzdis").style.display="none";
})
//segnoLink
document.getElementById("segnoLink").addEventListener("mouseover",function(event){
  document.getElementById("Wikisegno").style.display="block";
})
document.getElementById("segnoLink").addEventListener("mouseleave",function(event){
  document.getElementById("Wikisegno").style.display="none";
})
//LinkAsin
document.getElementById("LinkAsin").addEventListener("mouseover",function(event){
  document.getElementById("WikiAsintoti").style.display="block";
})
document.getElementById("LinkAsin").addEventListener("mouseleave",function(event){
  document.getElementById("WikiAsintoti").style.display="none";
})
//LinkLim
document.getElementById("LinkLim").addEventListener("mouseover",function(event){
  document.getElementById("WikiLimiti").style.display="block";
})
document.getElementById("LinkLim").addEventListener("mouseleave",function(event){
  document.getElementById("WikiLimiti").style.display="none";
})
//LinkGrafProb
document.getElementById("LinkGrafProb").addEventListener("mouseover",function(event){
  document.getElementById("WikigrafProb").style.display="block";
})
document.getElementById("LinkGrafProb").addEventListener("mouseleave",function(event){
  document.getElementById("WikigrafProb").style.display="none";
})
//LinkDeriv
document.getElementById("LinkDeriv").addEventListener("mouseover",function(event){
  document.getElementById("Wikideriv").style.display="block";
})
document.getElementById("LinkDeriv").addEventListener("mouseleave",function(event){
  document.getElementById("Wikideriv").style.display="none";
})
//LinkSegnDeriv
document.getElementById("LinkSegnDeriv").addEventListener("mouseover",function(event){
  document.getElementById("WikisegnoDeriv").style.display="block";
})
document.getElementById("LinkSegnDeriv").addEventListener("mouseleave",function(event){
  document.getElementById("WikisegnoDeriv").style.display="none";
})