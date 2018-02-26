function focusLabels() {
	if(!document.getElementsByTagName) return false;
	if(!document.getElementsByTagName("label")) return false;
	 var form=document.getElementsByTagName('form');
	 var labels=form.getElementsByTagName("label");
	 for (var i = 0; i < labels.length; i++) {
	 	if(!labels[i].getAttribute("for")) continue;
	 	labels[i].onclick=function(){
	    var for_txt=this.getAttribute("for");
	    if(!form.getElementById(for_txt)){
	    	continue;
	    }
	    var input=form.getElementById(for_txt);
	    input.focus();
	 	}
	 	}
	  }

//对表单进行简单的验证
function isFilled(field) {
	if(field.value.length<1||field.value==field.defaultValue){
		return false;
	}else{
      return true;
	}
}
function isEmail(field) {
 if (field.value.indexOf("@")==-1||field.value.indexOf(".")==-1) 
 	{ 
 		return false;
 	}
 else{
 	return true;
 }
}
function validateForm(form) {
for (var i = 0; i < form.elements.length; i++) {
	var element=form.elements[i];
	if(element.className.indexOf("required")!=-1)
	{
		if(!isFilled(element)){
			alert("Please fill in the"+element.name+"field.");
			return false;
		}
	}
	else if(element.className.indexOf("email")!=-1)
	{
		if(!isEmail(element)){
			alert("The"+element.name+"field must be a valid email address.");
			return false;
		}
	}else{
		return true;
	}
}
}
function prepareForms() {
for (var i=0; i<document.forms.length; i++) {
 var thisform = document.forms[i]; 
 thisform.onsubmit = function() {
return validateForm(this); }
} }

addLoadEvent(focusLabels);
addLoadEvent(prepareForms);