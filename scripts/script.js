// 1. variables (aka bindings), on top of global scope
const linkApi = "https://www.rijksmuseum.nl/api/nl/collection?key=SOmD5CX7&involved"



// const feedback = document.querySelector(#test)
// feedback.textContent = "De content is aan het laden..."

const display = document.querySelector("section")



// 2. the story
pakData()


// 3. functions
function pakData() {
    fetch(linkApi)
    .then(function(reactie){
        return reactie.json()
    }
    )
    .then(function(data){
        console.log(data)
        

        const lijst = $("ul")
        for(let i = 0; data.artObjects.length; i++){
            lijst.insertAdjacentHTML("beforebegin", `<li><h2>${data.artObjects[i].title}</h2><img src="${data.artObjects[i].webImage.url}" alt="${data.artObjects[i].title}"></li>`)
            // feedback.textContent = ""
        }
    }
    )
}

function $(element) {
    return document.querySelector(element)
}
