const rollButton = document.querySelector(".name__submit")
let nameFields = Array.from(document.getElementsByClassName("name__text-field"))
const resultsContainer = document.querySelector(".results")
let namesArray = []
let items = [
  "Spirit Box",
  "Ghost Writing Book",
  "Photo Camera",
  "EMF Reader",
  "Video Camera + Tripod",
  "UV Flashlight",
  "Crucifix",
  "Glow Stick",
  "Infrared Light Sensor",
  "Motion Sensor",
  "Parabolic Microphone",
  "Salt",
  "Sanity Pills",
  "Smudge Sticks + Lighter",
  "Sound Sensor",
  "Thermometer",
]
let lightItems = ["Candle + Lighter", "Strong Flashlight", "Flashlight"]

rollButton.addEventListener("click", (e) => {
  e.preventDefault()
  assignNames()
  fillResultsContainer()
  assignItems()
})

function assignNames() {
  namesArray = []
  nameFields.forEach((name) => {
    namesArray.push(name.value)
  })
  namesArray = namesArray.filter(Boolean)
}

function fillResultsContainer() {
  while (resultsContainer.firstChild) {
    resultsContainer.removeChild(resultsContainer.firstChild)
  }
  namesArray.forEach((element) => {
    const newElement = document.createElement("div")
    resultsContainer.appendChild(newElement)
    const newH2 = document.createElement("h2")
    newH2.innerHTML = element
    newElement.appendChild(newH2)
    const newList = document.createElement("ul")
    resultsContainer.appendChild(newList)
    newList.classList.add("results__list")
  })
}

function assignItems() {
  const listItem = Array.from(document.querySelectorAll(".results__list"))
  listItem.forEach((element) => {
    for (i = 0; i < 2; i++) {
      const newListItem = document.createElement("li")
      element.appendChild(newListItem)
      newListItem.innerHTML = items[getRandomInt(0, 15)]
      items = items.filter((item) => {
        return item !== newListItem.innerText
      })
    }
    items = [
      "Spirit Box",
      "Ghost Writing Book",
      "Photo Camera",
      "EMF Reader",
      "Video Camera + Tripod",
      "UV Flashlight",
      "Crucifix",
      "Glow Stick",
      "Infrared Light Sensor",
      "Motion Sensor",
      "Parabolic Microphone",
      "Salt",
      "Sanity Pills",
      "Smudge Sticks + Lighter",
      "Sound Sensor",
      "Thermometer",
    ]
    const newLightSource = document.createElement("li")
    element.appendChild(newLightSource)
    newLightSource.innerHTML = lightItems[getRandomInt(0, 2)]
  })
}

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) //The maximum is exclusive and the minimum is inclusive
}
