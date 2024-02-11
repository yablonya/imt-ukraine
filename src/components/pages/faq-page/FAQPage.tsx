import {Box, Typography} from "@mui/material";
import AccordionBlock from "@/components/common/ui/accordion-block/AccordionBlock";
import { faqQuestions } from "./constants";
import {useTranslations} from "next-intl";

import * as styles from './FAQPage.styles';


const FAQPage = () => {
	const t = useTranslations('pages.faq');

	return (
		<Box sx={styles.faqPage}>
			<Typography variant='h2' sx={styles.faqHeader}>
				{t('title')}
			</Typography>
			<Box sx={styles.questionsBlock}>
				{faqQuestions.map((item, index) => (
					<AccordionBlock
						key={index}
						headerText={t(item.question)}
						mainText={t(item.answer)}
					/>
				))}
			</Box>
		</Box>
	);
};

export default FAQPage;