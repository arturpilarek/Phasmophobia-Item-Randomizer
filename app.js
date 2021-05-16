const rollButton = document.querySelector(".name__submit")
let nameFields = Array.from(document.getElementsByClassName("name__text-field"))
const resultsContainer = document.querySelector(".results")
let namesArray = []
const items = [
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
const lightItems = ["Candle + Lighter", "Strong Flashlight", "Flashlight"]

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
  console.log(namesArray)
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
  console.log(listItem)
}
