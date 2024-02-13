'use client'

import React, {ChangeEvent, Dispatch, FC, SetStateAction, useEffect, useState} from "react";
import {FormControl, FormHelperText, InputLabel, OutlinedInput} from "@mui/material";
import * as styles from './Input.styles'
import {FormData} from '@/types/FormData';
import {emailValidator} from "@/lib/utils/ValidateForm";
import {useTranslations} from "next-intl";

interface InputProps {
	label: string,
	placeHolder: string,
	name: string,
	value: string,
	type?: string,
	multiline?: boolean,
	rows?: number | string,
	data: FormData,
	setData: Dispatch<SetStateAction<FormData>>,
	isTouched: boolean,
	setIsTouched: Dispatch<SetStateAction<boolean>>
}

const Input: FC<InputProps> = ({
	label,
	placeHolder,
	name,
	value,
	type = 'text',
	multiline = false,
	rows = 1,
	data,
	setData,
	isTouched,
	setIsTouched,
	...rest
}) => {
	const [emailError, setEmailError] = useState(false);
	const t = useTranslations('pages.contact_us');

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		if (name === 'email' && !!value && !emailValidator(value)) {
			setEmailError(true)
		} else {
			setEmailError(false)
		}

		setData((prev) => (
			{...prev, [name]: value}
		))
	}

	const handleTouch = () => {
		setIsTouched(true)
	}

	return (
		<FormControl sx={styles.formControl} error={(isTouched && !value) || emailError}>
			<InputLabel >
				{label}
			</InputLabel>
			<OutlinedInput
				label={label}
				placeholder={placeHolder}
				name={name}
				value={value}
				type={type}
				multiline={multiline}
				rows={rows}
				sx={styles.input}
				onChange={handleChange}
				onBlur={handleTouch}
				{...rest}
			/>
			<FormHelperText sx={{display: isTouched && !value ? 'block' : 'none'}}>
				{t('required')}
			</FormHelperText>
			<FormHelperText sx={{display: emailError ? 'block' : 'none'}}>
				{t('wrong_email')}
			</FormHelperText>
		</FormControl>
	);
};

export default Input