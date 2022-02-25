const loginEmail = document.querySelector("#email-login")
const loginSenha = document.querySelector("#senha-login")
const senhaCadastro = document.querySelector("#senha-cadastro")
const emailCadastro = document.querySelector("#email-cadastro")
const nomeCadastro = document.querySelector("#nome-cadastro")
const formLogin = document.querySelector("#form-login")
const formCadastro = document.querySelector("#form-cadastro")
const linkCadastro = document.querySelector(".link-cadastro")
const linkLogin = document.querySelector(".link-login")
let valueLoginEmail = "";
let valueLoginSenha = "";
let valueCadastroEmail = "";
let valueCadastroSenha = "";
let valueCadastroNome = "";

loginEmail.addEventListener('change', (e) => {
  e.preventDefault();
  valueLoginEmail = e.target.value
})
loginSenha.addEventListener('change', (e) => {
  e.preventDefault();
  valueLoginSenha = e.target.value
})
senhaCadastro.addEventListener('change', (e) => {
  e.preventDefault();
  valueCadastroSenha = e.target.value
})
emailCadastro.addEventListener('change', (e) => {
  e.preventDefault();
  valueCadastroEmail = e.target.value
})
nomeCadastro.addEventListener('change', (e) => {
  e.preventDefault();
  valueCadastroNome = e.target.value
})

linkCadastro.addEventListener('click', (e) => {
  e.preventDefault();
  formCadastro.style.display = 'flex'
  formLogin.style.display = 'none'
})

linkLogin.addEventListener('click', (e) => {
  e.preventDefault();
  formCadastro.style.display = 'none'
  formLogin.style.display = 'flex'
})

formLogin.addEventListener('submit', async (e) => {
  await login(e);
})

formCadastro.addEventListener('submit', async (e) => {
  await cadastro(e)
})

const login = async (e) => {
  e.preventDefault();
  const bodyRequest = {
    email: valueLoginEmail,
    senha: valueLoginSenha
  };
  try {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyRequest)
    })
    const data = await response.json();
    if (response.status !== 200) {
      console.error(data)
      return
    }
    localStorage.setItem('token', data.token)
    alert('login success')
  } catch (error) {
    alert('error')
  }
}

const cadastro = async (e) => {
  e.preventDefault();
  const bodyRequest = {
    email: valueCadastroEmail,
    senha: valueCadastroSenha,
    nome: valueCadastroNome
  };
  try {
    const response = await fetch('http://localhost:3000/usuarios', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyRequest)
    })
    const data = await response.json();
    if (response.status !== 201) {
      console.error(data)
      return
    }
    alert('usuário criado com sucesso')
    formLogin.style.display = 'flex'
    formCadastro.style.display = 'none'
  } catch (error) {
    alert('error')
  }
}