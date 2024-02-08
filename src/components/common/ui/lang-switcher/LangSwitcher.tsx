import {FC, useTransition} from "react";
import {Box, FormControl, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {UAFlag} from "@/components/common/icons/UAFlag";
import {ENFlag} from "@/components/common/icons/ENFlag";
import {FRFlag} from "@/components/common/icons/FRFlag";
import {DEFlag} from "@/components/common/icons/DEFlag";
import {usePathname, useRouter} from "next/navigation";

import * as styles from "./LangSwitcher.styles";

interface LangSwitcherProps {
	locale: string;
}

const LangSwitcher: FC<LangSwitcherProps> = ({ locale }) => {
	const router = useRouter();
	const pathName = usePathname().split('/');
	const [ isPending, startTransition ] = useTransition();

	const handleChange = (event: SelectChangeEvent) => {
		pathName[1] = event.target.value
		startTransition(() => {
			router.replace(pathName.join('/'));
		})
	};

	return (
		<FormControl>
			<Select
				value={locale}
				onChange={handleChange}
				sx={styles.changeLangSelect}
			>
				<MenuItem value='uk' sx={styles.changeLangOption}>
					<Box sx={styles.langIcon}><UAFlag/></Box>
					UA
				</MenuItem>
				<MenuItem value='en' sx={styles.changeLangOption}>
					<Box sx={styles.langIcon}><ENFlag/></Box>
					EN
				</MenuItem>
				<MenuItem value='fr' sx={styles.changeLangOption}>
					<Box sx={styles.langIcon}><FRFlag/></Box>
					FR
				</MenuItem>
				<MenuItem value='de' sx={styles.changeLangOption}>
					<Box sx={styles.langIcon}><DEFlag/></Box>
					DE
				</MenuItem>
			</Select>
		</FormControl>
	);
}

export default LangSwitcher;