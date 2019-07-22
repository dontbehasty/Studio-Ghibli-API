// Tabs
function openTab(evt, tabName) {
  var i;
  var x = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  var activebtn = document.getElementsByClassName("testbtn");
  for (i = 0; i < x.length; i++) {
    activebtn[i].className = activebtn[i].className.replace(" w3-dark-teal", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " w3-dark-teal";
 
  //Films
  if (document.tabName = "Films") {
    const app = document.getElementById('Films')   
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
  }

  if (document.tabName = "Characters") {
    const app = document.getElementById('Characters')   
    const container = document.createElement('div')
    container.setAttribute('class', 'container')

    app.appendChild(container)

    // Create a request variable and assign a new XMLHttpRequest object to it
    var request = new XMLHttpRequest()

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', 'https://ghibliapi.herokuapp.com/people', true)

    request.onload = function () {
      // Begin accessing JSON data here
      var data = JSON.parse(this.response)

      if (request.status >= 200 && request.status < 400) {
        data.forEach(people => {
        
        // Create a div with a card class
        const card = document.createElement('div')
        card.setAttribute('class', 'card')

        // Create an h1 and set the text content to the character's name
        const name = document.createElement('h1')
        name.textContent = people.name

        // Create a p and set the text content to the character's details
        const age = document.createElement('p')
        age.textContent = 'Age: ' + people.age

        const gender = document.createElement('p')
        gender.textContent = 'Gender: ' + people.gender

        const eye_color = document.createElement('p')
        eye_color.textContent = 'Eye Colour: ' + people.eye_color

        const hair_color = document.createElement('p')
        hair_color.textContent = 'Hair Colour: ' + people.hair_color 

        // Append the cards to the container element
        container.appendChild(card)

        // Each card will contain an h1 and a p
        card.appendChild(name)
        card.appendChild(age)
        card.appendChild(gender)
        card.appendChild(eye_color)
        card.appendChild(hair_color)
      })
      } else {
          const errorMessage = document.createElement('h1')
          errorMessage.textContent = `Issued has occurred. Data can not be displayed.`
          app.appendChild(errorMessage)
        }
      }

      // Send request
      request.send()
  }


  if (document.tabName = "Locations") {
    const app = document.getElementById('Locations')   
    const container = document.createElement('div')
    container.setAttribute('class', 'container')

    app.appendChild(container)

    // Create a request variable and assign a new XMLHttpRequest object to it
    var request = new XMLHttpRequest()

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', 'https://ghibliapi.herokuapp.com/locations', true)

    request.onload = function () {
      // Begin accessing JSON data here
      var data = JSON.parse(this.response)

      if (request.status >= 200 && request.status < 400) {
        data.forEach(place => {
        
        // Create a div with a card class
        const card = document.createElement('div')
        card.setAttribute('class', 'card')

        // Create an h1 and set the text content to the character's name
        const name = document.createElement('h1')
        name.textContent = place.name

        // Create a p and set the text content to the character's details
        const climate = document.createElement('p')
        climate.textContent = 'Climate: ' + place.climate

        const terrain = document.createElement('p')
        terrain.textContent = 'Terrain: ' + place.terrain

        const surface_water = document.createElement('p')
        surface_water.textContent = 'Surface Water: ' + place.surface_water

        // Append the cards to the container element
        container.appendChild(card)

        // Each card will contain an h1 and a p
        card.appendChild(name)
        card.appendChild(climate)
        card.appendChild(terrain)
        card.appendChild(surface_water)
      })
      } else {
          const errorMessage = document.createElement('h1')
          errorMessage.textContent = `Issued has occurred. Data can not be displayed.`
          app.appendChild(errorMessage)
        }
      }

      // Send request
      request.send()
  }  
}

var mybtn = document.getElementsByClassName("testbtn")[0];
mybtn.click();