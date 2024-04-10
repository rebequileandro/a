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
	age < 0 && null;
	age >= 18 ? true : false;
}
const ProfileCard = ({name, surname, age, description}) => {
  return (
	<div>ProfileCard</div>
  )
}

export default ProfileCard
