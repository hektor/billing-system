export const getPrimaryColors = () => {
	let colors = ''
	for (let i = 1; i <= 9; i++) {
		colors += `--color-primary-${i}00: hsl(0, 0%, ${100 - i*10}%); `
	}
	return colors
}

export const getHeadingSizes = () => {
	let headingSizes = ''
	for (let i = 1; i <= 6; i++) {
		headingSizes += `
      h${i} { 
        font-size: ${32 - ((i - 1) * 4)}px; 
        margin-top: ${8/i}px; 
        margin-bottom: ${16/i}px; 
      }
    `
	}
	return headingSizes
}
