const searchButton = document.querySelector(".form-button");

const handleSubmit = (e) => {
  e.preventDefault();
  const inputValue = document.querySelector(".form-container form input").value;

  console.log(inputValue);
};

searchButton.addEventListener("click", (e) => handleSubmit(e));
