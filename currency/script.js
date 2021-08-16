function Currency(){
    y = document.getElementById("converter").value;
    return y;
}

function Calculate(){
	y = Currency();
 
	x = document.getElementById("value1").value;
 
	if(x == ""){
		document.getElementById("value2").value = "";
	}else{
		switch(y){
			case "Dollar":
				document.getElementById("value2").value = x * 74.16;
			break;
 
			case "Pound":
				document.getElementById("value2").value = x * 102.80351;
			break;
 
			case "Euro":
				document.getElementById("value2").value = x * 87.39242;
			break;
 
			case "Yen":
				document.getElementById("value2").value = x * 0.6792311;
			break;
 
			case "Yuan":
				document.getElementById("value2").value = x * 11.452258;
			break;
		}
	}
}