
addLoadEvent(prepareSlideshow);
function moveElement(elemID,final_x,final_y,interval)
{
  if(!document.getElementById) return false;
  if(!document.getElementById(elemID)) return false;
  var elem=document.getElementById(elemID);
  if(!elem.style.left)
    elem.style.left="0px";
  if(!elem.style.top)
    elem.style.top="0px";
  var xpos=parseInt(elem.style.left);
  var ypos=parseInt(elem.style.top);
  if (xpos==final_x&&ypos==final_y) 
    return true;
  if(xpos<final_x)
  {
    var distx=Math.ceil((final_x-xpos)/10);
    xpos+=distx;
  }
  if(ypos<final_y)
  {
    var disty=Math.ceil((final_y-ypos)/10);
    ypos+=disty;
  }
  if(xpos>final_x)
  {
    var distx=Math.ceil((xpos-final_x)/10);
    xpos-=distx;
  }
  if(ypos>final_y)
  {
    var disty=Math.ceil((ypos-final_y)/10);
    ypos-=disty;
  }
  elem.style.left=xpos+"px";
  elem.style.top=ypos+"px";
  var repeat="moveElement('"+elemID+"',"+final_x+","+final_y+","+interval+")";
  setTimeout(repeat,interval);
}


function prepareSlideshow(){
  if(!document.getElementById) return false;
  if(!document.getElementsByTagName) return false;
  if(!document.getElementById("intro")) return false;
  var intro=document.getElementById("intro");
  var slideshow=document.createElement("div");
  slideshow.setAttribute("id","slideshow");
  var frame=document.createElement("img");
  frame.setAttribute("src","images/frame.gif");
  frame.setAttribute("alt","");
  frame.setAttribute("id","frame");
  slideshow.appendChild(frame);
  var preview=document.createElement("img");
  preview.setAttribute("src","images/slideshow.gif");
  preview.setAttribute("alt","a glimpse of what awaits you");
  preview.setAttribute("id","preview");
  slideshow.appendChild(preview);
  insertAfter(slideshow,intro);
 //alert(preview.getAttribute("id"));
 var links=intro.getElementsByTagName("a");
 for (var i = 0; i < links.length; i++) {
     links[i].onmouseover=function(){
    var destination=this.getAttribute("href");
     if(destination=="index.html")
       moveElement("preview",0,0,5);
     if(destination=="about.html")
       moveElement("preview",-150,0,10);
     if(destination=="photos.html")
       moveElement("preview",-300,0,5);
     if(destination=="live.html")
       moveElement("preview",-450,0,5);
     if(destination=="contact.html")
       moveElement("preview",-600,0,5);
   }
  }
}

