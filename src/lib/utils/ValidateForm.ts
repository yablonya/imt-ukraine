import {FormData} from '@/types/FormData';

export const emailValidator = (email: string) => {
	const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
	return emailRegex.test(email)
}

export const formValidator = (formData: FormData) => {
	return !(emailValidator(formData.email) &&
		formData.name &&
		formData.subject &&
		formData.message);
}