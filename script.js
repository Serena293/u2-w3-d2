const nome = document.getElementById("nome");
const cognome = document.getElementById("cognome");
const invia = document.getElementById("btn-invia");
const elimina = document.getElementById('btn-elimina');
const cardsContainer = document.getElementById('cards');

class User {
  constructor(_nome, _cognome) {
    this.nome = _nome;
    this.cognome = _cognome;
  }
}

// Create a new card element
const createCard = (user) => {
  const newCard = document.createElement('div');
  newCard.classList.add('border', 'border-2', 'border-info', 'row', 'm-3');
  newCard.innerHTML = `<div class="card">
    <div class="card-body">
  
      <p class="card-text">${user.nome} ${user.cognome}</p>
    </div>
  </div>`;
  cardsContainer.appendChild(newCard);
};


const loadCards = () => {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  users.forEach(user => createCard(user));
};


const getValues = () => {
  const newUser = new User(nome.value, cognome.value);
  createCard(newUser);

  const users = JSON.parse(localStorage.getItem('users')) || [];
  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));
};

const eliminaElemento = () => {
  localStorage.removeItem('users'); 
  cardsContainer.innerHTML = '';     
};
window.addEventListener('load', loadCards);


invia.addEventListener('click', (e) => {
  e.preventDefault();
  getValues();
});

elimina.addEventListener('click', (e) => {
  e.preventDefault();
  eliminaElemento();
});


//timer
let count = JSON.parse(sessionStorage.getItem('key')) || 0;

const startTimer = () => {
  const timer = document.createElement('p');
  
  timer.innerText = `Questa sessione è aperta da ${count} secondi`;
  document.body.appendChild(timer);

  setInterval(() => {
    count++;
    timer.innerText = `Questa sessione è aperta da ${count} secondi`;

    sessionStorage.setItem('key', JSON.stringify(count));
  }, 1000);
};

startTimer();
