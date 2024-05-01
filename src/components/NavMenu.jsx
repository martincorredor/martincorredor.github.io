import { Box } from '@mui/material';
import React, { useState } from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import AddTaskRoundedIcon from '@mui/icons-material/AddTaskRounded';
import AutoAwesomeMotionRoundedIcon from '@mui/icons-material/AutoAwesomeMotionRounded';
import BookmarkAddedRoundedIcon from '@mui/icons-material/BookmarkAddedRounded';

const NavMenu = () => {
  
  return (
    <Box className="navMenuItems Z-100">
      <div className="navMenuItemContainer">
        <span className="navMenuTitle">Proyectos</span>
        <AutoAwesomeMotionRoundedIcon className="navMenuIcon" />
      </div>
      <div className="navMenuItemContainer">
        <span className="navMenuTitle">Habilidades</span>
        <BookmarkAddedRoundedIcon className="navMenuIcon" />
      </div>
      <div className="navMenuItemContainer">
        <span className="navMenuTitle">Inicio</span>
        <HomeRoundedIcon
          className={'navMenuIcon'}
        />
      </div>
      <div className="navMenuItemContainer">
        <span className="navMenuTitle">Sobre mí</span>
        <PersonRoundedIcon className="navMenuIcon" />
      </div>
      <div className="navMenuItemContainer">
        <span className="navMenuTitle">Contacto</span>
        <ChatBubbleRoundedIcon className="navMenuIcon" />
      </div>
    </Box>
  );
};

export default NavMenu;
