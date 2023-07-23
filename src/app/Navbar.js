"use client";
import Link from 'next/link';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SettingsPhoneOutlinedIcon from '@mui/icons-material/SettingsPhoneOutlined';
import { useRouter } from 'next/navigation';
import TelegramIcon from '@mui/icons-material/Telegram';


export default function Navbar() {
    const location = useRouter();

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };




    const pages = [
        location.pathname ? {
            name: "Home",
            path: "/",
            current: true
        } : {
            name: "Home",
            path: "/",
            current: false
        },
        location.pathname ? {
            name: "Plumbing",
            path: "/plumbing",
            current: true
        } : {
            name: "Plumbing",
            path: "/plumbing",
            current: false
        },
        location.pathname ? {
            name: "Satellite",
            path: "/satellite",
            current: true
        } : {
            name: "Satellite",
            path: "/satellite",
            current: false
        },
        location.pathname ? {
            name: "Electric",
            path: "/electric",
            current: true
        } : {
            name: "Electric",
            path: "/electric",
            current: false
        },
        location.pathname ? {
            name: "Craft Painter",
            path: "/craftPainter",
            current: true
        } : {
            name: "Craft Painter",
            path: "/craftPainter",
            current: false
        },
    ];


    return (
        <AppBar position="fixed" sx={{ mb: { xs: "2rem", md: "3rem" } }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <SettingsPhoneOutlinedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Link href="/">
                        <Typography
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            ONE CALL KUWAIT
                        </Typography>
                    </Link>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center" ><Link sx={page.current ? true({ borderBottom: "2px solid gray" }) : ({ borderBottom: "none" })} href={page.path}> {page.name}</Link></Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <SettingsPhoneOutlinedIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Link href="/">
                        <Typography
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                textAlign: "center"
                            }}
                        >
                            ONE CALL KUWAIT
                        </Typography>
                    </Link>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <Link href={page.path}>{page.name}</Link>
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Box sx={{ display: { xs: "none", md: "block" } }}>
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Box sx={{ mx: "0.2rem" }}>
                                    <a href={`tel:+96566515342`}>
                                        
                                        <Button type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2, backgroundColor: "#002bff" }}>
                                        <Typography sx={{ fontSize: "1.4rem", fontWeight: "bold", color: "#f2830c", md: { fontSize: '0.7rem', fontWeight: "bold" } }}><TelegramIcon /> 66515342</Typography>
                                    </Button>
                                    </a>
                                </Box>
                                <Box sx={{ mx: "0.2rem" }}>
                                    <Link href="/signup"><Button type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}>Signup</Button></Link>
                                </Box>
                                <Box sx={{ mx: "0.2rem" }}><Link href="/login"><Button type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2, backgroundColor: "#c90a24" }}>Login</Button></Link></Box>
                            </Box>
                        </Box>
                        <Box sx={{ display: { xs: "block", md: "none" } }}>
                            <Link href="/signup"><Button type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, backgroundColor: "red" }}>Join</Button></Link>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}