// Filter reviews to add one card for each review in current category
const createCards = () => {
  // Get slug from current page
  const reviewsPathName = window.location.pathname;
  const reviewsSlug = [reviewsPathName.substring(reviewsPathName.lastIndexOf("/") + 1, reviewsPathName.lastIndexOf("."))]

  // Filter reviews that match current page
  const filterReviews = Object.keys(reviews)
    .filter(key => reviewsSlug.includes(key))
    .reduce((obj, key) => {
      obj[key] = reviews[key];
      return obj;
    }, {});

  const currentReviews = Object.values(filterReviews[reviewsSlug])
  let id = 0
  // Add a card for each current review
  for (const review of currentReviews) {

    addCards(review, `${reviewsSlug}${id}`)
    id++
  }
}

// Boostrap Card
// https://getbootstrap.com/docs/4.0/components/card/#titles-text-and-links
const addCards = (review, id) => {

    const cardContainer = document.getElementsByClassName("container")

    const card = cardContainer[0].appendChild(document.createElement("div"))
    card.classList.add("card")
    card.id = id

    const cardMedia = card.appendChild(document.createElement("iframe"))
    cardMedia.classList.add("card-img-top")
    cardMedia.src = review.media
    cardMedia.frameborder = "0"
    cardMedia.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    cardMedia.allowfullscreen


    const cardBody = document.createElement("div")
    card.appendChild(cardBody)
    cardBody.classList.add("card-body")

    const cardTitle = document.createElement("h2")
    cardTitle.classList.add("card-title")
    cardTitle.innerHTML = review.title
    cardBody.appendChild(cardTitle)

    const cardText = document.createElement("p")
    cardText.innerHTML = review.review
    cardText.classList.add("card-title")
    cardBody.appendChild(cardText)

    const cardLink = document.createElement("a")
    cardLink.href = review.webpage
    cardLink.classList.add("btn", "btn-primary")
    cardLink.innerHTML = `Check Out ${review.title}`
    cardBody.appendChild(cardLink)

}

document.body.onload = createCards