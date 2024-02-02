import {FC} from "react";
import {FormControl, InputLabel, OutlinedInput} from "@mui/material";
import * as styles from './Input.styles'

interface InputProps {
	label: string,
	placeHolder: string,
	multiline?: boolean,
	rows?: number | string,
}

const Input: FC<InputProps> = ({
	label,
	placeHolder,
	multiline = false,
	rows = 1,
}) => {
	return (
		<FormControl sx={styles.formControl}>
			<InputLabel sx={styles.inputlabel}>
				{label}
			</InputLabel>
			<OutlinedInput
				label={label}
				placeholder={placeHolder}
				multiline={multiline}
				rows={rows}
				sx={styles.input}
			/>
		</FormControl>
	);
};

export default Input