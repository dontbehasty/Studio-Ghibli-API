//Films
    const app = document.getElementById('root')
    const container = document.createElement('div')
    container.setAttribute('class', 'container')

    app.appendChild(container)

    // Create a request variable and assign a new XMLHttpRequest object to it
    var request = new XMLHttpRequest()

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

    request.onload = function () {
      // Begin accessing JSON data here
      var data = JSON.parse(this.response)

      if (request.status >= 200 && request.status < 400) {
        data.forEach(movie => {
        
        // Create a div with a card class
        const card = document.createElement('div')
        card.setAttribute('class', 'card')

        // Create an h1 and set the text content to the film's title
        const title = document.createElement('h1')
        title.textContent = movie.title

        // Create a p and set the text content to the film's description
        const desc = document.createElement('p')
        movie.description = movie.description.substring(0, 500) // Limit to 500 chars
        desc.textContent = `${movie.description}...` // End with an ellipses

        // Append the cards to the container element
        container.appendChild(card)

        // Each card will contain an h1 and a p
        card.appendChild(title)
        card.appendChild(desc)
      })
    } else {
        const errorMessage = document.createElement('h1')
        errorMessage.textContent = `Issued has occurred. Data can not be displayed.`
        app.appendChild(errorMessage)
        console.log(request.status)
      }
    }

    // Send request
    request.send()