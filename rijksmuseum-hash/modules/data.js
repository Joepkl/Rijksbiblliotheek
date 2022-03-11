import {renderData} from "../modules/render.js"



export function getAditionalData(collection){
    for(let i=0; i < collection.artObjects.length; i++){
        fetch('https://www.rijksmuseum.nl/api/nl/collection/' +
        collection.artObjects[i].objectNumber + '?key=SOmD5CX7&ps=10imgonly=true')
        .then(function(response){
            return response.json()
        })
        .then(function(detailed){
            renderData(detailed)
        })
        .catch((error)=> {
            console.log(error)
        })
    }
}

