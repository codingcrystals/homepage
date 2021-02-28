// Filter reviews to add one card for each review in current category
const createCards = () => {
    // Get slug from current page
    const reviewsPathName = window.location.pathname;
    const reviewsSlug = [reviewsPathName.substring(reviewsPathName.lastIndexOf("/") + 1, reviewsPathName.lastIndexOf("."))]

    const filterReviews = Object.keys(reviews)
      .filter(key => reviewsSlug.includes(key))
      .reduce((obj, key) => {
        obj[key] = reviews[key];
        return obj;
      }, {});

    const currentReviews = Object.values(filterReviews[reviewsSlug])

    for (const review of currentReviews) {
      addCards(review)
    }


}

// Boostrap Card
// https://getbootstrap.com/docs/4.0/components/card/#titles-text-and-links
const addCards = review => {

    const card = document.createElement("div")
    card.classList.add("card")
    card.id = "card"
    document.body.append(card)

    const cardImg = card.appendChild(document.createElement("img"))
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

document.body.onload = createCards