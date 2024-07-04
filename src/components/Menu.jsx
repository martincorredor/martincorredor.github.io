import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import CatchingPokemonOutlinedIcon from '@mui/icons-material/CatchingPokemonOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import { useNavigate } from 'react-router-dom';

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: 'absolute',
  // '& .MuiFab-primary': {
  //   backgroundColor: '#9199f4', 
  //   '&:hover': {
  //     backgroundColor: '#7279C2',
  //   },
  // },
}));

const actions = [
  { icon: <HomeOutlinedIcon />, name: 'Home', path: '/' },
  { icon: <CatchingPokemonOutlinedIcon />, name: 'Pokedex', path: '/about' },
  { icon: <CalculateOutlinedIcon />, name: 'Calculadora', path: '/projects' },
];

export default function Menu() {
  const navigate = useNavigate();

  return (
    <Box sx={{ position: 'relative', height: 70 }} className="menuIcon">
      <StyledSpeedDial
        ariaLabel="SpeedDial playground example"
        icon={<SpeedDialIcon />}
        direction={'right'}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => navigate(action.path)}
          />
        ))}
      </StyledSpeedDial>
    </Box>
  );
}
