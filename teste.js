let dados = [
    {
        Nome: 'João Pedro',
        Email: 'pedroaugusto131204@gmail.com',
        Idade: 17
    }, 
    {
        Nome: 'Vitória Eduardo',
        Email: 'vivigameplay@gmail.com',
        Idade: 12
    },
    {
        Nome: 'Arthur Bezerra',
        Email: 'arthur.bezerragomes@gmail.com',
        Idade: 16
    }
]

for(let i = 0; i < dados.length; i++) {
    if(dados[i].Email == 'pedroaugusto131204@gmail.com') {
        console.log(dados[i].Nome)
        console.log(dados[i].Idade)
        console.log(dados[i].Email)
    }
}
