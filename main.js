// Sounds 

let fail = document.querySelector('.fail'),
    success = document.querySelector('.success')
// Creating Letters 
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let lettersArr = Array.from(letters),
    lettersSection = document.querySelector('.lettersSection');

lettersArr.forEach((letter, letterIndex) => {

    let letterBox = document.createElement('span'),
        letterText = document.createTextNode(letter);

    letterBox.className = 'letter';
    letterBox.appendChild(letterText);
    lettersSection.appendChild(letterBox);
})

// Getting Random Category

const categories = {
    Movies : ['Inception', 'Titanic', 'Jumanji', 'PK', 'Avengares', 'Spiderman'],
    Countries : ['Egypt', 'Syria', 'Turkey', 'America', 'Italy', 'India', 'China', 'Japan', 'Russia'],
    Food : ['Rice', 'Beaf', 'Chicken', 'Soup', 'Bread', 'cake']
}

let categoriesProps = Object.keys(categories),
    ranProbIndex = Math.floor(Math.random() *categoriesProps.length),
    ranCategory = categoriesProps[ranProbIndex],
    ranCategoryArr = categories[ranCategory];

let categorySpan = document.querySelector('.category');

categorySpan.textContent = `Word Form: ${ranCategory}`

// Getting Random Value

let ranValueIndex = Math.floor(Math.random() * ranCategoryArr.length),
    ranValue = ranCategoryArr[ranValueIndex];

// Appending Random Value to word-guess section

let ranVlaueArr = Array.from(ranValue.toUpperCase()),
    wordGuessSection = document.querySelector('.word-guess');

ranVlaueArr.forEach(letter => {

    let guessSpan = document.createElement('span');

    guessSpan.classList = 'guess-span';
    wordGuessSection.appendChild(guessSpan);

})

// Check if the clicked litter exist in the random value

let guessSpanLetter = Array.from(document.querySelectorAll('.guess-span')),
    wrongTries = 0;
    

document.addEventListener('click', function(e) {

    if (e.target.className == 'letter') {

        let statue = false;

        e.target.classList.add('finished');

        ranVlaueArr.forEach((letter, letterIndex) => {

            if (e.target.textContent == letter) {

                statue = true;
                guessSpanLetter[letterIndex].textContent = letter;
                success.play();
            }
        })
        
        // check winning the game
        let winningSection = document.querySelector('.winning');

        let winning = guessSpanLetter.every(span => {
            return (span.textContent !== '')
            
        })

        if (winning == true) {
            
            winningSection.style.display = 'block';
        } 
        
        // check failing the game
        
        if (statue == false) {

            wrongTries++; 
            document.querySelector(`.wrong-${wrongTries}`).style.display = 'block';
            fail.play();
              
        }

        if (wrongTries == 8) {
            
            document.querySelector('.gameOver p').textContent = `The word is: ${ranValue}`;
            document.querySelector('.gameOver').style.display = 'block';

        }
    }

    // Play Again

    let Again = document.querySelectorAll('.again');

    Again.forEach(btn => {
        btn.onclick = function() {
            location.reload();
        }
    })
 
})




