const addCards = () => {
    const a = document.createElement("a")
    const img = document.createElement("img")
    const p = document.createElement("p")

    // Create Bootstrap Card in DOM
    // https://getbootstrap.com/docs/4.0/components/card/#titles-text-and-links
    const card = document.createElement("div")
    card.classList.add("card")
    card.id = "card"
    document.body.append(card)

    const cardImg = card.appendChild(img)
    cardImg.classList.add("card-img-top")
    cardImg.src = "https://assets.nintendo.com/image/upload/f_auto,q_auto/ncom/en_US/switch/online-service/1180x493_HERO_en?v=2021013002"
    cardImg.alt = "Image of game image"

    const cardBody = document.createElement("div")
    card.appendChild(cardBody)
    cardBody.classList.add("card-body")

    const cardTitle = document.createElement("h2")
    cardTitle.innerHTML = "Card Title"
    cardBody.appendChild(cardTitle)

    const cardText = document.createElement("p")
    cardText.innerHTML = "Some quick example text to build on the card title and make up the bulk of the card's content."
    cardText.classList.add("card-title")
    cardBody.appendChild(cardText)

    const cardLink = document.createElement("a")
    cardLink.href = "#"
    cardLink.classList.add("btn", "btn-primary")
    cardLink.innerHTML = "Go somewhere"
    cardBody.appendChild(cardLink)

}

document.body.onload = addCards