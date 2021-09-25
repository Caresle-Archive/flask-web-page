const buttonTheme = document.getElementById('change-theme')
const body = document.body
let changeTheme = false

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