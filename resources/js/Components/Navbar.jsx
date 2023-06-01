import { Link } from "@inertiajs/react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { MdMenu } from "react-icons/md";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AccountMenu from "@/Components/AccountMenu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";

import {BiExit, FaUserAlt, MdDashboard} from "react-icons/all";
import NavLink from "@/Components/NavLink";
import {useState} from "react";


const drawerWidth = 300;
const navItems = ['Home', 'About', 'Contact'];

function Navbar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const isAdmin = props.auth?.roles ? props.auth.roles.some(item => item.name === 'admin') : null

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    console.log(props)

    const ItemAuth = () => (
        <ListItem>
            <div className="top-0 right-0 px-6 sm:block">
                {props.auth?.user ? (
                    <div className="flex">
                        {/*{`${props.auth.information.firstname} ${props.auth.information.lastname}`}*/}
                        <AccountMenu>
                            <MenuItem>
                                <ListItemIcon>
                                    <FaUserAlt/>
                                </ListItemIcon>
                                Profile
                            </MenuItem>
                            {isAdmin &&
                            <MenuItem>
                                <ListItemIcon>
                                    <MdDashboard/>
                                </ListItemIcon>
                                <NavLink href={route('dashboard')}>Dashboard</NavLink>
                            </MenuItem>
                            }
                            <Divider />
                            <MenuItem>
                                <ListItemIcon>
                                    <BiExit/>
                                </ListItemIcon>
                                <Link href={route('logout')} method={'post'}>Logout</Link>
                            </MenuItem>
                        </AccountMenu>
                    </div>
                ) : (
                    <>
                        <Link href={route('login')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                            Log in
                        </Link>

                        <Link
                            href={route('register')}
                            className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
                        >
                            Register
                        </Link>
                    </>
                )}
            </div>
        </ListItem>
    )

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}

            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { md: 'none' } }}
                    >
                        <MdMenu />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}
                    >
                        MUI
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {navItems.map((item) => (
                            <Button key={item} sx={{ color: '#fff' }}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                    <Box>
                        <ItemAuth/>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </>
    );
}

export default Navbar;
