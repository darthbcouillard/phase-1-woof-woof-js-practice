let dogs
document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/pups")
    .then(res => res.json())
    .then(data => {
        dogs = data
        populateDogBar(dogs)
    })
    const goodDogFilter = document.getElementById("good-dog-filter")
    goodDogFilter.addEventListener("click", () => {
        const dogBar = document.getElementById("dog-bar")
        dogBar.innerHTML = ""
        const filteredDogs = dogs.filter(dog => dog.isGoodDog === true)
        console.log(goodDogFilter.innerText)
        if(goodDogFilter.innerText === "Filter good dogs: OFF"){
            goodDogFilter.innerText = "Filter good dogs: ON"
            populateDogBar(filteredDogs)
        } else if(goodDogFilter.innerText === "Filter good dogs: ON"){
            goodDogFilter.innerText = "Filter good dogs: OFF"
            populateDogBar(dogs)
        }
        
    })
})


function populateDogBar(dogs) {
    const dogBar = document.getElementById("dog-bar")
    dogs.forEach(dog => {
        const name = document.createElement("SPAN")
        name.innerText = dog.name
        name.addEventListener("click", () => displayInfo(dog))
        dogBar.append(name)
    })
}

function displayInfo(dog) {
    const dogDetails = document.getElementById("dog-info")
    const img = document.createElement("img")
    img.src = dog.image
    const h2 = document.createElement("h2")
    h2.innerText = dog.name
    const button = document.createElement("button")
    button.innerText = "Good Dog!"
    button.addEventListener("click", () => {
        if(button.innerText === "Good Dog!"){
            button.innerText = "Bad Dog!"
        }else if(button.innerText === "Bad Dog!") {
            button.innerText = "Good Dog!"
        }
    })
    dogDetails.innerHTML = ""
    dogDetails.append(img, h2, button)
}


