import {Head, Link} from "@inertiajs/react";
import { CssBaseline, Grid, Paper, Box } from "@mui/material";
import cls from './AuthLayout.module.scss';
import { MdBackspace } from "react-icons/md";

export default function AuthLayout({ children, title }) {
    return (
        <>
            <Head title={title} />
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={8}
                    lg={9}
                    sx={{
                        backgroundRepeat: 'no-repeat',
                        background: 'linear-gradient(to left, #8f94fb, #4e54c8);',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        zIndex: -1,
                    }}
                >
                    <ul className={cls.circles}>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </Grid>
                <Grid item xs={12} sm={8} md={4} lg={3} component={Paper} elevation={6} square>
                    <Link href={'/'}><MdBackspace size={40} color={'#1565c0'} className="ml-5 mt-3"/></Link>
                    <Box
                        sx={{
                            margin: '30px auto',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            maxWidth: '400px',
                            padding: '20px',
                        }}
                    >
                        {children}
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}
