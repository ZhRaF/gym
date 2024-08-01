import { Box } from '@mui/material'
import BodyPart from './BodyPart'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import{ Typography } from '@mui/material';
import { useContext } from 'react';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <Typography onClick={() => {  console.log("LeftArrow clicked");
      return (scrollPrev())}} className="arrow-button" sx={{ cursor: 'pointer' }}>
      <img src={LeftArrowIcon} alt="left-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="arrow-button" sx={{ cursor: 'pointer' }}>
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({data,bodyParts}) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          id={item.id || item}
          title={item.id || item}
          sx={{p:'10px'}}
        >
          <BodyPart item={item} 
          />
        </Box>
      ))}
    </ScrollMenu>
  );
}

export default HorizontalScrollbar