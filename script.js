const textarea = document.querySelector('textarea');
const criptoButton = document.querySelector('.cripto');
const descriptoButton = document.querySelector('.descripto');
const area = document.querySelector('.area');
const texto1 = document.querySelector('.texto-1');
const texto2 = document.querySelector('.texto-2');

function criptografar(text) {
  return text.replace(/[a-z]/g, c => String.fromCharCode(c.charCodeAt(0) + 3));
}

function descriptografar(text) {
  return text.replace(/[a-z]/g, c => String.fromCharCode(c.charCodeAt(0) - 3));
}

criptoButton.addEventListener('click', () => {
  const text = textarea.value.trim();
  if (text) {
    const criptografado = criptografar(text);
    const paragraph = document.createElement('p');
    paragraph.textContent = criptografado;
    paragraph.className = 'texto-criptografado';

    const copiarButton = document.createElement('button');
    copiarButton.textContent = 'Copiar';
    copiarButton.className = 'copiar';

    area.innerHTML = '';
    area.appendChild(paragraph);
    area.appendChild(copiarButton);

    copiarButton.addEventListener('click', () => {
      navigator.clipboard.writeText(criptografado);
    });

    texto1.style.display = 'none';
    texto2.style.display = 'none';
  }
});

descriptoButton.addEventListener('click', () => {
  const text = textarea.value.trim();
  if (text) {
    const descriptografado = descriptografar(text);
    const paragraph = document.querySelector('.texto-criptografado');
    paragraph.textContent = descriptografado;
  }
});
