const getQuote = () => {
  return fetch("https://api.adviceslip.com/advice")
          .then((data) => data.json())
          .then((quote) => quote)
}

const showQuote = (quote) => {
  const quoteNumer = document.getElementById('number')
  const quoteText = document.getElementById('quoteText')
  quoteNumer.textContent = quote.slip.id
  quoteText.textContent = quote.slip.advice
}

const shurfleBtn = document.getElementById('shurfleBtn');
shurfleBtn.addEventListener('click', () => {
  const loader = document.querySelector('.loader')
  const error = document.querySelector('.error');
  loader.style.opacity = ".8"
  getQuote()
    .then((quote) => showQuote(quote))
    .catch()
    .finally(() => loader.style.opacity = "0")
})