'use client';

import {FC, ReactNode, useState} from "react";
import {Box, Typography} from "@mui/material";
import {SxProps, Theme} from "@mui/system";
import mergeSx from "@/lib/utils/MergeSxStylesUtil";
import * as styles from './FlexibleTextBlock.styles';

interface FlexibleTextBlockProps {
  children?: ReactNode;
  sx?: SxProps<Theme>;
}

const FlexibleTextBlock: FC<FlexibleTextBlockProps> = ({children, sx = {}}: FlexibleTextBlockProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  };

  return (
    <Box sx={sx}>
      <Box sx={styles.textBlock(isOpen)}>
        {children}
        <Box sx={styles.whiteOverlay(isOpen)}></Box>
      </Box>
      <Typography sx={styles.readMoreButton} onClick={handleClick}>
        {isOpen ? 'Сховати' : 'Читати далі...'}
      </Typography>
    </Box>
  );
};

export default FlexibleTextBlock