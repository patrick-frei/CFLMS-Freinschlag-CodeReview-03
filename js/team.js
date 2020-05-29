let teamMembers = [{
  name: "Fran",
  email: "fran@index.com",
  image: "img/person1.jpg",
  specialFields: [
    "liability",
    "health",
    "accident"
  ]
},{
  name: "Bill",
  email: "bill@index.com",
  image: "img/person2.jpg",
  specialFields: [
    "real estate",
    "business"
  ]
},{
  name: "Fritz",
  email: "fritz@index.com",
  image: "img/person3.jpg",
  specialFields: [
    "private property",
    "motor vehicles",
    "machinery"
  ]
}];
let teamContainer = document.getElementById("team")

for (i = 0; i < teamMembers.length; i++) {
  teamContainer.innerHTML += `<div id="member${i + 1}" class="member"></div>`
  with (teamContainer.children[i]) {
    innerHTML += `<img src="${teamMembers[i].image}">`
    innerHTML += `<p class="name">${teamMembers[i].name}</p>`
    innerHTML += `<p class="email">${teamMembers[i].email}</p>`
    innerHTML += `<p class="fields hidden">${teamMembers[i].specialFields.join(", ")}</p>`
  }
}

let memElements = document.getElementsByClassName("member")
for (i = 0; i < memElements.length; i++) {
  memElements[i].addEventListener("click", function() {
    document.querySelector(`#${this.id} .email`).classList.toggle("hidden")
    document.querySelector(`#${this.id} .fields`).classList.toggle("hidden")
  })
}
