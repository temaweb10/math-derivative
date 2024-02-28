import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";

import React from "react";
import { Link } from "react-router-dom";
import stylesHeader from "./Header.module.scss";

const pages = [
  { page: "Примеры", to: "/tasks" },
  { page: "Калькулятор производной", to: "/calculate" },
];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" className={stylesHeader.header}>
      <Container maxWidth="xl">
        <Toolbar className={stylesHeader.toolbar} disableGutters>
          <span className={stylesHeader.logo}>πроизводная</span>
          <nav className={stylesHeader.headerNav}>
            <Link to="/tasks" className={stylesHeader.headerLink}>
              Задачи
            </Link>
            <Link to="/calculate" className={stylesHeader.headerLink}>
              Калькулятор производной
            </Link>
          </nav>
          <div className={stylesHeader.menuContainer}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon htmlColor="#111" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map(({ page, to }) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link
                    className={stylesHeader.headerLink}
                    to={to}
                    style={{ textAlign: "center" }}
                  >
                    {page}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
