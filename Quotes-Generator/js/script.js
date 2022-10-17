
let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");
let twitterBtn = document.querySelector("#Tbtn");
let mode = document.getElementById("mode");
let buttons = document.querySelectorAll(".allBtn");
let catbtn=document.querySelector('#category');
let copyBtn = document.querySelector('#Cbtn');
let cat=document.querySelector('#category');
let url="https://free-quotes-api.herokuapp.com/";
let head=document.querySelector('.header h2');

btn.addEventListener('click', function () {
  let fetchRes = fetch(
    url+cat.value,
                                );
            fetchRes.then(res =>
                res.json()).then(d => {
                  quote.innerHTML = d.quote;
                  writer.innerHTML = '-' + d.author;
                })
	/*let random = Math.floor(Math.random() * quotes.length);
	quote.innerHTML = quotes[random].text;
	writer.innerHTML = '-' + quotes[random].author;*/
  if(cat.style.backgroundColor!=="white"){
	copyBtn.style.backgroundColor = '#fb7413';
  }
  else{
    copyBtn.style.backgroundColor = 'white';
  }
	copyBtn.innerHTML = "Copy ";
});


twitterBtn.addEventListener('click', tweetQuote);
copyBtn.addEventListener('click', copyQuote);


// Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.innerText} ${writer.innerText}`;
  window.open(twitterUrl, "_blank");
}


// change mode
mode.addEventListener("click", () => {
  let element = document.body;
  element.classList.toggle("dark");

  let buttons = document.querySelectorAll(".allBtn");
  let modeText = document.querySelector("#modeText");
  if(catbtn.style.backgroundColor!=="white")
  {
    catbtn.style.backgroundColor="white";
    catbtn.style.color="black";
  }
  else{
    catbtn.style.backgroundColor="#fb7413";
    catbtn.style.color="#fff";
  }
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].style.backgroundColor !== "white") {
      buttons[i].style.backgroundColor = "white";
      buttons[i].style.color = "#222";
      modeText.innerHTML = "Dark Mode";
      mode.style.borderColor = "black";
    } else {
      buttons[i].style.backgroundColor = "hsl(25, 97%, 53%)";
      buttons[i].style.color = "#fff";
      modeText.innerHTML = "Light Mode";
      mode.style.borderColor = "white";
    }
  }
  document.querySelector('#Qbtn').style.backgroundColor="forestgreen";
  if(head.style.color!=="burlywood"){
  head.style.color="burlywood";
  }
  else{
    head.style.color="#fff";
  }
  
});

// Copy to Clipboard button
function copyQuote() {
	// Get the quote
	var copiedQuote = quote.innerHTML;

	// Copy quote to clipboard
	navigator.clipboard.writeText(copiedQuote);
	copyBtn.style.backgroundColor = '#74B72E';
	copyBtn.innerHTML = "Copied !!"; 
}