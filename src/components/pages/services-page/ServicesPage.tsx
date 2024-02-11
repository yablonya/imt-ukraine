import {Box, Typography} from "@mui/material";
import Image from "next/image";
import services from "../../../../public/images/services.png";
import {useTranslations} from "next-intl";

import * as sxStyles from './ServicesPage.styles';
import styles from './ServicesPage.module.scss';

const ServicesPage = () => {
	const t = useTranslations('pages.services');

  return (
    <>
      <Box sx={sxStyles.servicesBlock}>
        <Image
          src={services}
          alt={"Services page image"}
          className={styles['servicesBlockImg']}
        />
        <Box sx={sxStyles.textContainer}>
          <Typography variant='h3' sx={sxStyles.textPartHeader}>
	          {t('title')}
          </Typography>
          <Typography sx={sxStyles.textPartContent}>
	          {t('text')}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default ServicesPage;