function calculo() {
    var altura = document.getElementById("altura").value
    var peso = document.getElementById("peso").value
    var imc = parseFloat(peso) / parseFloat(altura * altura)
    var resultado = document.querySelector('span')
    console.log(altura, peso)
    console.log(imc)

    if (imc < 18.5)
<<<<<<< HEAD
        resultado.innerHTML = "Seu IMC é: " + imc.toFixed(2) + " Classificação: Magreza"
    else if (imc < 24.9)
        resultado.innerHTML = "Seu IMC é: " + imc.toFixed(2) + " Classificação: Peso normal"
    else if (imc < 29.9)
        resultado.innerHTML = "Seu IMC é: " + imc.toFixed(2) + " Classificação: Sobrepeso"
    else if (imc < 39.9)
        resultado.innerHTML = "Seu IMC é: " + imc.toFixed(2) + " Classificação: Obesidade"
    else
        resultado.innerHTML = "Seu IMC é: " + imc.toFixed(2) + " Classificação: Obesidade grave"
=======
        resultado.innerHTML = "Seu IMC é: " + imc.toFixed(2)  +  " Classificação: Magreza"
    else if (imc < 24.9)
        resultado.innerHTML = "Seu IMC é: " + imc.toFixed(2)  +  " Classificação: Peso normal"
    else if (imc < 29.9)
        resultado.innerHTML = "Seu IMC é: " + imc.toFixed(2)  +  " Classificação: Sobrepeso"
    else if (imc < 39.9)
        resultado.innerHTML = "Seu IMC é: " + imc.toFixed(2)  +  " Classificação: Obesidade"
    else
        resultado.innerHTML = "Seu IMC é: " + imc.toFixed(2)  +  " Classificação: Obesidade grave"
>>>>>>> 29009ef684298232e2a41c7b4a60b47d3b651a75
    console.log(resultado)
}

