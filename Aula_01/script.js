var name = prompt('please enter a name')
var imgUrl ='https://cdn3.vox-cdn.com/thumbor/7S8n1XL0IChDdcoEug7cP_qBnV0=/0x104:438x396/1280x854/cdn0.vox-cdn.com/imported_assets/846325/steve-jobs-1.jpg'

/*console.log(name)
alert(name)*/

var idade = prompt('please insert your age')
while (isNaN(idade) == true){
var idade = prompt('please insert a your age in number')
}

console.log(name + "\n" + idade)
var registration = prompt('please enter a registration')
var course = prompt('please enter a course')
/*
document.write('<h1>Olá '+name+ ' Seja bem vindo! </h1>')
document.write('<h1>Eu acho que sua idade é: ' + idade + '</h1>')
*/
document.write(`<h1> Olá ${name}! Bem vindo a UCB <br> nome: ${name}<br> idade: ${idade}<br> matricula: ${registration}<br> curso: ${course} </h1>`)
document.write(`<img src=${imgUrl}/>`)


