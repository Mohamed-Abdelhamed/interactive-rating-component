const completed = document.querySelector("#completed");
const cardRating = document.querySelector("#card-rating");
const ratingInputs = document.querySelectorAll('input[name="rating"]');
const finalSelected = document.querySelector(".final-selected");
const statement = document.querySelector('.statement')

const btnSubmit = document.getElementById('btn');

//btn.addEventListener("click", submitRating)

/*btnSubmit?.addEventListener('click', () => {
  alert('You clicked the button');
});*/

btnSubmit?.addEventListener("click", (event) => {
  console.log("INSIDE",ratingInputs);
  event.preventDefault();

  const checkedRating = Array.from(ratingInputs).find((input) => input.checked);

  if (checkedRating) {
    
    statement.textContent = `You selected ${checkedRating.value} out of 5`;
	console.log(checkedRating.value);

    cardRating.style.display = "none";
    completed.style.display = "flex";
  }
});


/*function submitRating() {
  Rating.style.display = 'none';
  cardComplete.style.display = 'flex';
  statement.innerHTML = `You selected ${selectedText} out of 5`;
}*/