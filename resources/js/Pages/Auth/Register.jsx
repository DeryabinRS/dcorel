import { useEffect } from 'react';
import { Link, useForm } from '@inertiajs/react';
import {Avatar, Box, Button, Grid, TextField, Paper, Typography} from "@mui/material";
import AuthLayout from "@/Layouts/AuthLayout/AuthLayout";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <AuthLayout title="Register">
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>

            </Avatar>
            <Typography variant="h3" component="h1">
                Registration
            </Typography>
            <Box component="form" noValidate onSubmit={submit} sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    value={data.firstname}
                    id="firstname"
                    label="First name"
                    name="firstname"
                    onChange={handleOnChange}
                    error={errors.firstname ? true : false}
                    helperText={errors.firstname}
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    value={data.lastname}
                    id="lastname"
                    label="Last name"
                    name="lastname"
                    onChange={handleOnChange}
                    error={errors.lastname ? true : false}
                    helperText={errors.lastname}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    value={data.email}
                    id="email"
                    label="Email Address"
                    name="email"
                    onChange={handleOnChange}
                    error={errors.email ? true : false}
                    helperText={errors.email}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    value={data.password}
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    onChange={handleOnChange}
                    error={errors.password ? true : false}
                    helperText={errors.password}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    value={data.password_confirmation}
                    name="password_confirmation"
                    label="Confirm password"
                    type="password"
                    id="password_confirmation"
                    onChange={handleOnChange}
                    error={errors.password_confirmation ? true : false}
                    helperText={errors.password_confirmation}
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs>

                    </Grid>
                    <Grid item>
                        <Link href={route('login')}>
                            {"I have an account? Sign In"}
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </AuthLayout>
    );
}
