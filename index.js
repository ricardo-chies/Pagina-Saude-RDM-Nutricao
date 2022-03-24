//Calculo IMC
function calculo() {
    var altura = document.getElementById("altura").value
    var peso = document.getElementById("peso").value
    var imc = parseFloat(peso) / parseFloat(altura * altura)
    var resultado = document.querySelector('span')

    if (imc < 18.5)
        resultado.innerHTML = "Seu IMC é: " + imc.toFixed(2) + " Classificação: Magreza"
    else if (imc < 24.9)
        resultado.innerHTML = "Seu IMC é: " + imc.toFixed(2) + " Classificação: Peso normal"
    else if (imc < 29.9)
        resultado.innerHTML = "Seu IMC é: " + imc.toFixed(2) + " Classificação: Sobrepeso"
    else if (imc < 39.9)
        resultado.innerHTML = "Seu IMC é: " + imc.toFixed(2) + " Classificação: Obesidade"
    else
        resultado.innerHTML = "Seu IMC é: " + imc.toFixed(2) + " Classificação: Obesidade grave"
}

//Validação de CPF
function enviarForm(){
	var inputCPF = document.getElementById("cpf");
	
	if(validarCPF(inputCPF.value)){
		alert("Válido");
		inputCPF.classList.remove("erro");
        inputCPF.classList.add("border-green")
	}else{
		alert("invalido");
		inputCPF.focus()
		inputCPF.classList.add("erro");
        inputCPF.classList.add("border-red")
	}
	
}

function validarCPF(cpf) {	
	cpf = cpf.replace(/[^\d]+/g,'');	
	if(cpf == '') return false;	
	// Elimina CPFs invalidos conhecidos	
	if (cpf.length != 11 || 
		cpf == "00000000000" || 
		cpf == "11111111111" || 
		cpf == "22222222222" || 
		cpf == "33333333333" || 
		cpf == "44444444444" || 
		cpf == "55555555555" || 
		cpf == "66666666666" || 
		cpf == "77777777777" || 
		cpf == "88888888888" || 
		cpf == "99999999999")
			return false;		
	// Valida 1o digito	
	add = 0;	
	for (i=0; i < 9; i ++)		
		add += parseInt(cpf.charAt(i)) * (10 - i);	
		rev = 11 - (add % 11);	
		if (rev == 10 || rev == 11)		
			rev = 0;	
		if (rev != parseInt(cpf.charAt(9)))		
			return false;		
	// Valida 2o digito	
	add = 0;	
	for (i = 0; i < 10; i ++)		
		add += parseInt(cpf.charAt(i)) * (11 - i);	
	rev = 11 - (add % 11);	
	if (rev == 10 || rev == 11)	
		rev = 0;	
	if (rev != parseInt(cpf.charAt(10)))
		return false;		
	return true;   
}
    