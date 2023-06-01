import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import { Link, useForm } from '@inertiajs/react';

import {Avatar, Box, Button, Grid, TextField, Paper, Typography} from "@mui/material";
import AuthLayout from "@/Layouts/AuthLayout/AuthLayout";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <AuthLayout title="Login">
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>

            </Avatar>
            <Typography variant="h3" component="h1">
                Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={submit} sx={{ mt: 1 }}>
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

                <div className="block mt-4 mb-4">
                    <label className="flex items-center">
                        <Checkbox name="remember" value={data.remember} onChange={handleOnChange} />
                        <span className="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                </div>

                {canResetPassword && (
                    <Link
                        href={route('password.request')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Forgot your password?
                    </Link>
                )}

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
                        <Link href={route('register')}>
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </AuthLayout>
    );
}
