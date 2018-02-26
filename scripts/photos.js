function preplaceholder(){
	if (!document.createElement)  return false;
	if(!document.createTextNode) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("imageGallery")) return false;
	var img=document.createElement("img");
	img.setAttribute("id","placeholder");
	img.setAttribute("src","images/placeholder.jpg");
	img.setAttribute("alt","my image gallery");
	var description=document.createElement("p");
	description.setAttribute("id","description");
	var txt=document.createTextNode("let's go to party!");
	description.appendChild(txt);
	var ul=document.getElementById("imageGallery");
	insertAfter(description, ul);
	insertAfter(img,description);
}

function showPic(val) {
	//alert(val.getAttribute("href"));
	if(!document.getElementById("placeholder"))  return false;
	 var source=val.getAttribute("href");
	 var placeholder=document.getElementById("placeholder");
	 placeholder.setAttribute("src",source);
	 }
function showText(val) {
	if(!document.getElementById("description"))  return false;
	var text=val.getAttribute("title");
	var description=document.getElementById("description");
	description.firstChild.nodeValue=text;
}
function preparelinks() {
	//进行必要的检查
	if(!document.getElementsByTagName)  return false;
	if(!document.getElementById)  return false;
	if(!document.getElementById("imageGallery"))  return false;
	//alert(document.getElementById("imageGallery")); 
	var ul=document.getElementById("imageGallery");
    var links=ul.getElementsByTagName("a");
	for(var i=0;i<links.length;i++)
		{
		   links[i].onclick=function(){
			showPic(this);
			showText(this);
			return false;
		}
		}
}
addLoadEvent(preplaceholder);
addLoadEvent(preparelinks);