const nome = document.getElementById('box-nome');
const sobrenome = document.getElementById('box-sobrenome');
const email = document.getElementById('box-email');
const numero = document.getElementById('box-numero');
const CPF = document.getElementById('box-cpf');
const senha = document.getElementById('box-senha');
const senha2 = document.getElementById('box-confirmarsenha');

let conteudo = document.getElementById('conteudo');
let alerta = document.getElementById('alerta');
let Contas = [];
function criarconta(e){
    e.preventDefault()

    if(nome.value != "" && sobrenome != "") {
        if(senha.value == senha2.value) {
            const contas1 = {
                Nome: `${nome.value} ${sobrenome.value}`,
                Email: email.value,
                Numero: numero.value,
                CPF: CPF.value,
                Senha: senha.value
            }

            Contas.push(contas1);

            console.log(Contas);

        } else {
            alerta.innerHTML = `<p>As senhas não coincidem!</p>`;
            setInterval(function () {alerta.innerHTML = ""}, 3000);
    
        }
        
    } else {
        alerta.innerHTML = `<p>Preencha os campos!</p>`;
        setInterval(function () {alerta.innerHTML = ""}, 3000);
    }
}


function entrar(e) {
    e.preventDefault();

    const ConfirmarEmail = document.getElementById('email');

    for(let i = 0; i<Contas.length; i++){
        if(Contas[i].Email == ConfirmarEmail.value){
            conteudo.innerHTML = `Nome: ${Contas[i].Nome} <br> Email: ${Contas[i].Email}`;
        }
    }

}