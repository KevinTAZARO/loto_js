const checkLoto = (firstname, lastname, email, lotoNumbers) => {
	if (!firstname) {
		alert("Le prénom est obligatoire");
		return;
	}

	if (!lastname) {
		alert("Le nom est obligatoire");
		return;
	}

	if (!email) {
		alert("L'email est obligatoire");
		return;
	}

const emailRegex = /^.{8,30}@.+\..{2,3}$/;
	if (!emailRegex.test(email)) {
		alert("L'email n'est pas valide");
		return;
	}


const winningNumbers = [];
for (let i = 0; i < 6; i++) {
		winningNumbers.push(Math.floor(Math.random() * 50) + 1);
	}


let hasWon = true;
for (let i = 0; i < 6; i++) {
	if (winningNumbers[i] !== lotoNumbers[i]) {
		hasWon = false;
		break;
	}
}

if (hasWon) {
	alert("Félicitations, vous avez gagné 1 million !!!");
} else {
	alert(`Désolé, vous avez perdu, les nombres gagnants sont : ${winningNumbers.join(', ')}`);
}
};


const form = document.querySelector("form");
form.addEventListener("submit", event => {
  // Empêche le formulaire de soumettre les données au serveur
  event.preventDefault();

  // Récupérez les valeurs du formulaire
  const firstname = form.elements.firstname.value;
  const lastname = form.elements.lastname.value;
  const email = form.elements.email.value;
  const lotoNumbers = [];
  for (let i = 0; i < 6; i++) {
    lotoNumbers.push(parseInt(form.elements[`number${i + 1}`].value));
  }

  // Appelez la fonction checkLoto avec les valeurs du formulaire
  checkLoto(firstname, lastname, email, lotoNumbers);
});