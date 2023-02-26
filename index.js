let colorValue
let modeValue
let footer = document.getElementById('bottom-info-bar')

document.getElementById('submit--button').addEventListener('click', (e) => {

e.preventDefault()
colorValue = document.querySelector('#color-input').value.slice(1)
modeValue = document.querySelector('#color-mode--select').value

fetch(`https://www.thecolorapi.com/scheme?hex=${colorValue}&mode=${modeValue}&count=5`,{method:'GET'})
.then(res => res.json())
.then(data => {
    footer.innerHTML = ''
    const columns = Array.from(document.getElementById('color--grid').children)
      for (let i = 0; i < data.colors.length; i++) {
         columns[i].style.backgroundColor = data.colors[i].hex.value
         footer.innerHTML += `<p>${data.colors[i].hex.value}</p>`
      }
})
})