const userName = prompt('come ti chiami? ')
console.log(userName)

const lastName = prompt('come fai cognome? ')
console.log(lastName)

const preferitColour = prompt('il tuo colore preferito?')
console.log(preferitColour)

const paragraph = document.getElementById('pasword')

paragraph .innerText = `la tua pasword è: ${userName}${lastName}${preferitColour}${'21'}`
console.log(paragraph)