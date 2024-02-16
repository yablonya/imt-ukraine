'use client'

import Image from "next/image";
import countries from "../../../../../../../public/images/countries.png";
import {Box, List, ListItem, ListItemIcon, Typography} from "@mui/material";
import {CircleOutlined} from "@mui/icons-material";
import useDelay from "@/hooks/use-delay/useDelay";
import {useTranslations} from "next-intl";

import * as sxStyles from './DesktopVHPBlock.styles'
import styles from "../../../AboutUsPage.module.scss";

const DesktopVHPBlock = () => {
	const checked = useDelay(50)
	const t = useTranslations('pages.about_us.vhp');

  return (
    <Box sx={sxStyles.vhpBlock}>
	    <Image src={countries} className={styles.countriesImg} alt={'Countries image'}/>
	    <Box sx={sxStyles.vhpContent(checked)}>
		    <Typography variant='h1' sx={sxStyles.vhpContentHeader}>
			    Victoria Hand Project
		    </Typography>
		    <Box sx={sxStyles.textBorders}>
			    <Box sx={sxStyles.vhpContentText}>
				    {t('before_list')}

				    <List>
					    <ListItem>
						    <ListItemIcon sx={sxStyles.listItemIcon}>
							    <CircleOutlined sx={{height: '12px'}}/>
						    </ListItemIcon>
						    {t('first_item')}
					    </ListItem>

					    <ListItem>
						    <ListItemIcon sx={sxStyles.listItemIcon}>
							    <CircleOutlined sx={{height: '12px'}}/>
						    </ListItemIcon>
						    {t('second_item')}
					    </ListItem>

					    <ListItem>
						    <ListItemIcon sx={sxStyles.listItemIcon}>
							    <CircleOutlined sx={{height: '12px'}}/>
						    </ListItemIcon>
						    {t('third_item')}
					    </ListItem>
				    </List>

				    {t('after_list')}
			    </Box>
		    </Box>
	    </Box>
    </Box>
  );
};

export default DesktopVHPBlock;