fetch("https://api.punkapi.com/v2/beers/random")
.then((response) => {
    const details = response.json()
    return details
})
.then((details) =>{
    console.log(details)
    const container = document.getElementById("container")
   

    for(i = 0; i < details.length; i++){

        headerContainer = document.createElement("div")
        descriptionContainer = document.createElement("div")
        imageContainer = document.createElement("div")
        tagContainer = document.createElement("div")


        const header = document.createElement("h1")
        const description = document.createElement("p")
        const image = document.createElement("img")
        const tag = document.createElement("p")

        container.appendChild(headerContainer)
        container.appendChild(descriptionContainer)
        container.appendChild(imageContainer)
        container.appendChild(tagContainer)
        
        header.innerText = details[i].name
        description.innerText = details[i].description
        image.src = details[i].image_url
        tag.innerText = details[i].tagline
        
        headerContainer.classList.add("header")
        descriptionContainer.classList.add("details")
        imageContainer.classList.add("image")
        tagContainer.classList.add("tagline")
        
        headerContainer.appendChild(header)
        descriptionContainer.appendChild(description)
        imageContainer.appendChild(image)
        tagContainer.appendChild(tag)

        button = document.createElement("button")
        button.innerText = `Bring on Another One!`
        button.classList.add("button")
        button.onclick = function (){window.location.reload()}
        container.appendChild(button)
        
    }
})







.catch((error) =>{
    console.log(error)
})