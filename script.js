document.getElementById('loginBtn').onclick = function () {
  document.getElementById('modal').classList.remove('hidden');
};

document.getElementById('fecharBtn').onclick = function () {
  document.getElementById('modal').classList.add('hidden');
};

document.getElementById('cadastroForm').onsubmit = function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  const cpf = document.getElementById('cpf').value;
  const senha = document.getElementById('senha').value;

  if (cpf.length !== 11 || telefone.length < 10 || telefone.length > 11) {
    alert('CPF deve ter 11 dígitos e Telefone deve ter 10 ou 11 dígitos.');
    return;
  }

  const usuario = { nome, email, telefone, cpf, senha };

  localStorage.setItem('usuario', JSON.stringify(usuario));
  alert('Seu cadastro foi realizado');
  window.location.href = 'perfil.html';
};

function exibirDadosUsuario() {
  const usuario = JSON.parse(localStorage.getItem('usuario'));

  if (usuario) {
    document.getElementById('userData').innerHTML = `
      <p>Nome: ${usuario.nome}</p>
      <p>Email: ${usuario.email}</p>
      <p>Telefone: ${usuario.telefone}</p>
      <p>CPF: ${usuario.cpf}</p>
    `;
  } else {
    document.getElementById('userData').innerHTML = '<p>Nenhum usuário cadastrado.</p>';
  }
}

if (window.location.pathname.includes('perfil.html')) {
  exibirDadosUsuario();
}

document.getElementById('telefone').oninput = function () {
  this.value = this.value.replace(/\D/g, '').slice(0, 11);
};

document.getElementById('cpf').oninput = function () {
  this.value = this.value.replace(/\D/g, '').slice(0, 11);
};
