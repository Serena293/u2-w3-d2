const firstName = document.getElementById("name");
const email = document.getElementById("email");
const invia = document.getElementById("btn-invia");
const elimina = document.getElementById("btn-elimina");

class User {
  constructor(_firstName, _email) {
    this.name = _firstName;
    this.email = _email;
  }
}

const getValues = () => {
  const newUser = new User(firstName.value, email.value)
  console.log(newUser)
};

getValues()