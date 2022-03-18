function calculo() {
    var altura = document.getElementById("altura").value
    var peso = document.getElementById("peso").value

    var resultado = peso / (altura * altura)

    var texto = ""
    if (resultado = "")
        texto = "Preencha seus dados!"
    else if (resultado < 18.5)
        texto = "Seu resultado é 'Magreza' seu imc é: "
    else if (resultado < 24.9)
        texto = "Peso normal"
    else if (resultado < 29.9)
        texto = "Sobrepeso"
        else if (resultado < 39.9)
        texto = "Obesidade"
    else
        texto = "Obesidade grave"

       var imc = document.getElementById("texto_resultado").innerHTML = texto

}