function checked_sexe() {
    if (
      document.getElementById('Choix1').checked ||
      document.getElementById('Choix2').checked
    ) {
      return true;
    } else {
      return false;
    }
  }
  
  function checked_name() {
    var name = document.getElementById('Name').value;
  
    if (name.length >= 2) {
      return true;
    } else {
      return false;
    }
  }
  
  function checked_firstname() {
    var firstname = document.getElementById('Prenom').value;
  
    if (firstname.length >= 2) {
      return true;
    } else {
      return false;
    }
  }
  
  function checked_age() {
    var age = document.getElementById('Age').value;
  
    age = parseInt(age, 10);
  
    if (Number.isInteger(age) && age >= 5 && age <= 140) {
      return true;
    } else {
      return false;
    }
  }
  
  function checked_password() {
    var password = document.getElementById('motdepasse').value;
  
    if (password.length >= 6) {
      return true;
    } else {
      return false;
    }
  }
  
  function checked_password2() {
    var password = document.getElementById('motdepasse').value;
    var password2 = document.getElementById('motdepasse2').value;
  
    if (password === password2 && password2 !== "") {
      return true;
    } else {
      return false;
    }
  }
  
  function checked_country() {
    var country = document.getElementById('pays');
    var selectedOption = country.options[country.selectedIndex].value;
  
    if (selectedOption !== "") {
      return true;
    } else {
      return false;
    }
  }
  
  var button = document.getElementById('button');
  
  button.addEventListener('click', (e) => {
    if (
      checked_age() &&
      checked_name() &&
      checked_firstname() &&
      checked_sexe() &&
      checked_password() &&
      checked_password2() &&
      checked_country()
    ) {
      alert("Les informations sont bien envoyées");
    } else {
      alert("Erreur, un des champs est incorrect. Veuillez réessayer !");
    }
  });