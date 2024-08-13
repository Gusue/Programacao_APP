//2º Crie uma função que lê uma temperatura do usuário e no final qual converter entre celsius, fahrenheit e kelvin
function escolher(){
    let option = Number(prompt('Digite a opção da sua temperatura'))
    let temp = Number(prompt('Digite a sua temperatura'))
    let options = Number(prompt('Digite a opção da temperatura que deseja converter'))


    switch(option){
        case 1:
            switch(options){
                case 1:
                    alert(`Sua temperatura convertida é:${temp}`)
                    break
                case 2:
                    alert(`Sua temperatura convertida é:${(temp*1.8)+32}`)
                    break
                case 3:
                    alert(`Sua temperatura convertida é:${temp+273.15}`)
                    break
                default:
                    alert('Erro tente novamente')
                    break
            }

        break
        case 2:
            switch(options){
                case 1:
                    alert(`Sua temperatura convertida é:${(temp-32)/1.8}`)
                    break
                case 2:
                    alert(`Sua temperatura convertida é:${temp}`)
                    break
                case 3:
                    alert(`Sua temperatura convertida é:${(temp+459.67)*5/9}`)
                    break
                default:
                    alert('Erro tente novamente')
                    break
            }
        break 
        case 3:
            switch(options){
                case 1:
                    alert(`Sua temperatura convertida é:${temp-273.15}`)
                    break
                case 2:
                    alert(`Sua temperatura convertida é:${(temp*(9/5))-459.67}`)
                    break
                case 3:
                    alert(`Sua temperatura convertida é:${temp}`)
                    break
                default:
                    alert('Erro tente novamente')
                    break
            }
        break
    }
}

//1º Crie um programa que calcula o imc do usuário do usuário e mostre o resultado ao final, o usuario entra com os dados e no final apenas é mostrado os dados Usar IF
//2º Crie uma função que lê uma temperatura do usuário e no final qual converter entre celsius, fahrenheit e kelvin
//3º Programa que gere x numeros aleátorio da loteria para o usuario o usuario fala a quantidade e gera a quantidade aleatoria -> 1 a 60

