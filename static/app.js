const body = document.body

const buttonTheme = document.getElementById('change-theme')
const learnMore = document.getElementById('learn-more')
const buttonContainer = document.getElementById('buttons-container')

let changeTheme = false
let timeoutId

buttonTheme.addEventListener('click', () => {
	changeTheme = !changeTheme
	if (changeTheme) {
		body.classList.replace('light', 'dark')
		buttonTheme.innerHTML = 'Light theme'
	} else {
		body.classList.replace('dark', 'light')
		buttonTheme.innerHTML = 'Dark theme'
	}
})

learnMore.addEventListener('click', () => {
	buttonContainer.classList.add('btn-hide')
	timeoutId = setTimeout(removeButtons, 300)
})

function removeButtons() {
	buttonContainer.remove()
	clearTimeout(timeoutId)
}