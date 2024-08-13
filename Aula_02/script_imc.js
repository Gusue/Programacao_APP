//1º Crie um programa que calcula o imc do usuário do usuário e mostre o resultado ao final, o usuario entra com os dados e no final apenas é mostrado os dados Usar IF
function imc() {
    var kg = Number(prompt('Insira seu peso em kg'))
    var altura = Number(prompt('Insira sua altura em Metros'))
    var imc = 0

    imc = kg/(altura*2)
    alert(`Seu Imc é de: ${imc}`)

}