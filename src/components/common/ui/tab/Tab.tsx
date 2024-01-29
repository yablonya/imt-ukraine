import {Box, Theme, Typography} from "@mui/material";
import {FC, ReactNode} from "react";
import * as styles from './Tab.styles';
import {SxProps} from "@mui/system";

interface TabProps {
  startIcon?: ReactNode;
  label: string;
  sx?: SxProps<Theme>;
}

const Tab: FC<TabProps> = ({
  startIcon,
  label,
  sx= {},
}) => {
  return (
    <Box sx={styles.tabStyles}>
      {startIcon &&
        <Box sx={styles.iconContainer}>{startIcon}</Box>
      }
      <Typography>{label}</Typography>
    </Box>
  );
};

export default Tab;