import '../modules/vendor/routie.min.js'
import { zoekData } from '../modules/search.js'



export function handleRoutes(){
    routie(
        {
            '': () => {
                let inputField = ''
                zoekData(inputField)
            },
            ':id': inputField => {
                zoekData(inputField)
            }
        }
    )   
}

handleRoutes()



// Eventlistener om te zoeken

// document.getElementById('zoekForm').addEventListener('submit', function(prevent){
//     prevent.preventDefault();
// })




function searchField(event){
    event.preventDefault()

    let searchValue = document.querySelector('input').value
    window.location.hash = searchValue
}

const form = document.getElementById('zoekForm')
form.addEventListener('submit', searchField)

// Loading state
export function setLoading(){
    const feedback = document.querySelector('section')
    feedback.textContent= "De content is aan het laden..."
}

export function stopLoading(){
    const feedback = document.querySelector('section')
    feedback.textContent= "";
}


// Verschijnen van home button na zoeken
function verschijnen(){
    document.getElementById('homeButton').style.display = 'block'
}

document.getElementById('zoekForm').addEventListener('submit', verschijnen)
