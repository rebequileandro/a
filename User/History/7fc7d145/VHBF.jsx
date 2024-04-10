import React from 'react'

export const titleCase = (text) => {
	if(text === '') {
		return text
	}
	else {
		const arr = text.split(' ')
		const result = []
		for (let element of arr) {
			result.push(element[0].toUpperCase() + element.substring(1).toLowerCase());
		}
		return result.join(' ')
	}
}
export const mayorDeEdad = (age) => {
	if(age < 0) return null;
	if(age >= 18) {
		return true;
	}
	else {
		return false;
	}
}
const ProfileCard = ({name, surname, age, description}) => {
  return (
	<div>ProfileCard</div>
  )
}

export default ProfileCard
