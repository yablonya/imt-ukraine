'use client';

import {Box, Fade, Typography, useMediaQuery} from "@mui/material";
import {useTranslations} from "next-intl";
import Image from 'next/image';
import mainFirstImg from '../../../../public/images/main-first-img.jpg';
import hand1 from '../../../../public/images/hand1.jpg';
import hand2 from '../../../../public/images/hand2.jpg';
import handsInBox from '../../../../public/images/hands-in-box.jpg';
import printing from '../../../../public/images/printing.jpg';
import mergeSx from "@/lib/utils/MergeSxStylesUtil";
import theme from "@/styles/theme/theme";

import * as sxStyles from './MainPage.styles';
import styles from './MainPage.module.scss'

const MainPage = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('desktopSemiMedium'));
	const t = useTranslations('pages.main');

  return (
    <>
      <Fade in={true} timeout={800}>
	      <Box sx={sxStyles.firstBlock}>
		      <Image
			      src={mainFirstImg}
			      alt={"Main page first image"}
			      className={styles['firstBlockImg']}
		      />
		      <Box sx={sxStyles.textContainer}>
			      <Typography variant='h3' sx={sxStyles.textPartHeader}>
				      Invictus Medical Technologies Ukraine
			      </Typography>
			      <Typography sx={sxStyles.textPartContent}>
				      {t('text')}
			      </Typography>
		      </Box>
	      </Box>
      </Fade>
      <Fade in={true} timeout={2400}>
	      <Box sx={sxStyles.mediaBlock}>
		      <Typography variant='h3' sx={sxStyles.mediaBlockHeader}>
			      {t('title_media')}
		      </Typography>
		      <Box sx={sxStyles.media}>
			      <Box sx={sxStyles.imageContainer}>
				      <Image
					      src={hand1}
					      alt={"Hand 1 image"}
					      className={styles['mediaImg']}
				      />
			      </Box>
			      <Box sx={sxStyles.imageContainer}>
				      <Image
					      src={hand2}
					      alt={"Hand 2 image"}
					      className={styles['mediaImg']}
				      />
			      </Box>
			      {!isMobile && (
				      <iframe
					      src="https://www.youtube.com/embed/6Pk4Fdez8LA?si=yFHGj8UuKuqojdb9"
					      title="YouTube video player"
					      className={styles['video']}
				      ></iframe>
			      )}
			      <Box sx={sxStyles.imageContainer}>
				      <Image
					      src={handsInBox}
					      alt={"Hands in a box image"}
					      className={styles['mediaImg']}
				      />
			      </Box>
			      <Box sx={mergeSx(sxStyles.imageContainer, { alignItems: 'flex-start' })}>
				      <Image
					      src={printing}
					      alt={"Printing a hand image"}
					      className={styles['mediaImg']}
				      />
			      </Box>
			      {isMobile && (
				      <iframe
					      src="https://www.youtube.com/embed/6Pk4Fdez8LA?si=yFHGj8UuKuqojdb9"
					      title="YouTube video player"
					      className={styles['video']}
				      ></iframe>
			      )}
		      </Box>
	      </Box>
      </Fade>
    </>
  );
};

export default MainPage;