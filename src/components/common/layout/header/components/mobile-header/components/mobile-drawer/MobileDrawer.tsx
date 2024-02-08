import {Box, Drawer } from "@mui/material";
import Tab from "@/components/common/ui/tab/Tab";
import { FC } from "react";
import {useLocale, useTranslations} from "next-intl";
import {
	ChatBubbleBottomCenterTextIcon,
	ChatBubbleLeftRightIcon,
	Cog8ToothIcon,
	HandRaisedIcon,
	HomeIcon,
	QuestionMarkCircleIcon
} from "@heroicons/react/24/outline";

import * as styles from './MobileDrawer.styles';


interface MobileDrawerProps {
  drawerState: boolean;
  toggleDrawer: () => void;
}

const MobileDrawer: FC<MobileDrawerProps> = ({drawerState, toggleDrawer}) => {
	const t = useTranslations('navigation.header');
	const locale = useLocale();

  return (
    <Drawer
      anchor="top"
      open={drawerState}
      onClose={toggleDrawer}
    >
      <Box sx={styles.tabList}>
	      <Tab
		      startIcon={<HomeIcon/>}
		      label={t('main')}
		      link={`/${locale}`}
		      onClick={toggleDrawer}
	      />
	      <Tab
		      startIcon={<ChatBubbleBottomCenterTextIcon/>}
		      label={t('about_us')}
		      link={`/${locale}/about-us`}
		      onClick={toggleDrawer}
	      />
	      <Tab
		      startIcon={<HandRaisedIcon/>}
		      label={t('hands')}
		      link={`/${locale}/hands`}
		      onClick={toggleDrawer}
	      />
	      <Tab
		      startIcon={<Cog8ToothIcon/>}
		      label={t('services')}
		      link={`/${locale}/services`}
		      onClick={toggleDrawer}
	      />
	      <Tab
		      startIcon={<QuestionMarkCircleIcon/>}
		      label='FAQ'
		      link={`/${locale}/faq`}
		      onClick={toggleDrawer}
	      />
	      <Tab
		      startIcon={<ChatBubbleLeftRightIcon/>}
		      label={t('contact_us')}
		      link={`/${locale}/contact-us`}
		      onClick={toggleDrawer}
	      />
      </Box>
    </Drawer>
  );
};

export default MobileDrawer;