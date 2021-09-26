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
	const textToInsert = document.createElement('section')
	textToInsert.classList.add('items-center')
	textToInsert.innerHTML = `
		<h2 class="text-color text-center">What is Flask?</h2>
		<p class="text-color text-center">
			Flask is a lightweight WSGI web application framework.
			It is designed to make getting started quick and easy. 
		</p>
		<button class="btn btn-change">
			<a href="https://flask.palletsprojects.com/" target="blank">
			Flask website
			</a>
		</button>
	`
	body.appendChild(textToInsert)
}