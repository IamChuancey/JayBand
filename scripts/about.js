function showSection(id) {
 	var sections=document.getElementsByTagName("section");
 	for (var i = 0; i < sections.length; i++) {
        if(sections[i].getAttribute("id")!=id)
        {
           sections[i].style.display="none";
        }else{
           sections[i].style.display="block";
        }

 	}
 }

 function prepareInternalnav() {
   if(!document.getElementsByTagName) return false;
   if(!document.getElementById) return false;
   if(!document.getElementById("content")) return false;
   if(!document.getElementsByTagName("nav")) return false;
   var content=document.getElementById("content");
   var navs=content.getElementsByTagName("nav");
   var nav=navs[0];
   var links=nav.getElementsByTagName("a");
   for (var i = 0; i < links.length; i++) {
   var sectionId=links[i].getAttribute("href").split("#")[1];
   if(!document.getElementById(sectionId)) continue;
   document.getElementById(sectionId).style.display="none";
   //闭包问题
   links[i].destination=sectionId;
   links[i].onclick=function(){
   	showSection(this.destination);
   	return false;
   }
   }
 }

 addLoadEvent(prepareInternalnav);