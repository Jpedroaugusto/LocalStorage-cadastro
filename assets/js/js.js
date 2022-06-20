const email = document.getElementById('email');
const senha = document.getElementById('password');

let conteudo = document.getElementById('conteudo');

let vetor = []

function entrar(e) {
    e.preventDefault();

    if(email.value != "" && senha.value != "") {
        const dados = {
            email:  email.value,
            senha:  senha.value
        }

        conteudo.innerHTML = `Email: ${dados.email} <br> Senha: ${dados.senha} `
    
        vetor.push(dados);

        email.value = "";
        senha.value = "";

        console.log(vetor);

    } else {
        alert('preecha os campos')
    }
}

const firebaseConfig = {
    apiKey: "AIzaSyCop8EI6gTWdreNposANuhRnyXhfoALrlw",
    authDomain: "teste-85c3b.firebaseapp.com",
    projectId: "teste-85c3b",
    storageBucket: "teste-85c3b.appspot.com",
    messagingSenderId: "198383591523",
    appId: "1:198383591523:web:81234b3fc124c303591856",
    measurementId: "G-S7CMJVC1R5"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


for(let i = 0; i<=vetor.length;  i++) {

}