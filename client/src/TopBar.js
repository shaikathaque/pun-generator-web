import React from 'react';
import './TopBar.css';
import AppBar from 'material-ui/AppBar';

var TopBar = () => (
  <AppBar className="topBar"
    title="Pun Generator"
    showMenuIconButton={false}
  />
);

export default TopBar;
