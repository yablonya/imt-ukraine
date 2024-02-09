import {SxProps, Theme} from "@mui/system";

export const textBlock = (isOpen: boolean): SxProps<Theme> => ({
	whiteSpace: 'pre-line',
  position: 'relative',
  height: isOpen ? 'auto' : '600px',
  overflow: isOpen ? 'visible' : 'hidden',
});

export const whiteOverlay = (isOpen: boolean): SxProps<Theme> => ({
  display: isOpen ? 'none' : 'block',
  height: '200px',
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  background: 'linear-gradient(to bottom, transparent 10%, white 98%)',
});

export const readMoreButton: SxProps<Theme> = {
  width: 'fit-content',
  textDecoration: 'underline 1px solid #1C6758',
  textUnderlineOffset: '5px',
  marginTop: '20px',
  cursor: 'pointer',
  '&:hover': {
    color: '#575757',
  },
};