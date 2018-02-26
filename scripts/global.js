addLoadEvent(highlightPage);
function addLoadEvent(func){
	var oldload=window.onload;
	//alert(typeof window.onload);
	if(typeof window.onload == "function")
		{
		window.onload=function(){
			oldload();
			func();
				}
		}
	else {
	window.onload=func;	
}
}

function addClass(element,value) {
	if(!element.className)
	{
		element.className=value;
	}
	else{
		var newClassName=element.className;
		newClassName+=" ";
		newClassName+=value;
		element.className=newClassName;
	}
}

function insertAfter(newElement,targetElement){
  var parent=targetElement.parentNode;
  parent.appendChild(newElement);
    if(parent.lastChild==targetElement)
     parent.appendChild(newElement);
    else{
      parent.insertBefore(newElement,targetElement.nextSibling);
    }
 }

 function highlightPage(){
 	if(!document.getElementsByTagName) return false;
 	if(!document.getElementById) return false;
 	if(!document.getElementById("navigation")) return false;
 	var navigation=document.getElementById("navigation");
 	var links=navigation.getElementsByTagName("a");
 	var currentUrl=window.location.href;
 	//alert(currentUrl);
 	for (var i = 0; i < links.length; i++) {
 		if(currentUrl.indexOf(links[i].getAttribute("href"))!=-1)
 			//alert(links[i].getAttribute("href"));
 			{
 				links[i].className="here";
 				 var linktext=links[i].lastChild.nodeValue.toLowerCase();
                 document.body.setAttribute("id",linktext);
                 //alert(document.body.getAttribute("id"));
 		 }
 	}

 }

 
