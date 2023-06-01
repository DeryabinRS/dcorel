import {Head} from "@inertiajs/react";
import {CssBaseline, Grid, Paper, Box} from "@mui/material";
import cls from './AuthLayout.module.scss';

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
                    sx={{
                        // backgroundImage: 'url(https://catherineasquithgallery.com/uploads/posts/2021-02/1612874623_87-p-krasno-belii-fon-oboi-106.jpg)',
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
                <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            margin: '30px auto',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            maxWidth: '400px',
                        }}
                    >
                        {children}
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}
