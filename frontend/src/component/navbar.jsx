import { AppBar, Box, Button, Toolbar, createTheme, ThemeProvider } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';

import logo from '../assets/logo.png';
import { getToken } from '../service/localstoretoken';

const Navbar = () => {
    useLocation();
    const token = getToken();
    const theme = createTheme({
        components: {
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        backgroundColor: '#2273F8',
                        textTransform:'capitalize'
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform:'capitalize',
                        fontWeight:'bold',
                        margin:'0rem 0.5rem',
                        backgroundColor:"#2273F8"
                    },
                },
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <AppBar component="header" position="static">
                <Toolbar className="container">
                    <Box sx={{ flexGrow: 1 }}>
                        <img src={logo} alt="Logo" />
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'block' } }}>
                        <Button variant='contained' component={NavLink} to="/" >Home</Button>
                        <Button variant='contained' component={NavLink} to="/about"  >About</Button>
                        <Button variant='contained' component={NavLink} to="/feature"  >Feature</Button>
                        <Button variant='contained' component={NavLink} to="/product"  >Product</Button>
                        <Button variant='contained' component={NavLink} to="/reviews"  >Reviews</Button>
                        <Button variant='contained' component={NavLink} to="/faq"  >Faq</Button>
                        <Button variant='contained' component={NavLink} to="/contact"  >Contact</Button>
                        { token ? 
                        <Button variant='contained' component={NavLink} to="/user/profile"  >Profile</Button>
                        :
                        <Button variant='contained' component={NavLink} to="/user"  >Login/Registration</Button>
                        }
                    </Box>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
};

export default Navbar;
