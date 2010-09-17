console.log("yeah");
document.body.bgColor='green';

d = document.getElementsByTagName("input");
for(i=0; tag=d[i]; i++){
	if(tag.getAttribute("maxlength")=="3") tag.value=Math.round(3*Math.random());
}

