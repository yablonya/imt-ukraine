'use client';

import {Box, Fade, List, ListItem, ListItemIcon, Typography} from "@mui/material";
import Image from "next/image";
import countries from "../../../../../../../public/images/countries.png";
import FlexibleTextBlock from "@/components/common/ui/flexible-text-block/FlexibleTextBlock";
import {CircleOutlined} from "@mui/icons-material";
import useDelay from "@/hooks/use-delay/useDelay";
import {useTranslations} from "next-intl";

import * as sxStyles from './MobileVHPBlock.styles';
import styles from '../../../AboutUsPage.module.scss';

const MobileVHPBlock = () => {
	const checked = useDelay(800);
	const t = useTranslations('pages.about_us.vhp');

  return (
    <Box
	    sx={{
				display: {
					mobile: 'block',
					desktopSemiMedium: 'none',
				}
	    }}
    >
      <Box sx={sxStyles.vhpImageBlock(checked)}>
        <Image src={countries} alt={'Countries image'} className={styles.countriesImg}/>
        <Fade in={checked} timeout={600}>
	        <Typography variant='h2' sx={sxStyles.vhpHeader}>
		        Victoria Hand Project
	        </Typography>
        </Fade>
      </Box>
      <FlexibleTextBlock sx={sxStyles.vhpText}>
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
      </FlexibleTextBlock>
    </Box>
  );
};

export default MobileVHPBlock;