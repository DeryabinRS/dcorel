import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';
import AuthLayout from "@/Layouts/AuthLayout/AuthLayout";
import {Button, TextField} from "@mui/material";

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('password.store'));
    };

    return (
        <AuthLayout title="Login">
            <Head title="Reset Password" />

            <form onSubmit={submit} className="w-full">
                <div>
                    <InputLabel htmlFor="email" value="Email" />
                    <TextField
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        fullWidth
                        autoComplete="username"
                        onChange={onHandleChange}
                        error={errors.email ? true : false}
                        helperText={errors.email}
                    />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />
                    <TextField
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        fullWidth
                        autoComplete="new-password"
                        isFocused={true}
                        onChange={onHandleChange}
                        error={errors.password ? true : false}
                        helperText={errors.password}
                    />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />
                    <TextField
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        fullWidth
                        autoComplete="new-password"
                        onChange={onHandleChange}
                        error={errors.password_confirmation ? true : false}
                        helperText={errors.password_confirmation}
                    />
                </div>

                <div className="mt-6">
                    <Button className="ml-4" disabled={processing} variant="contained" fullWidth>
                        Reset Password
                    </Button>
                </div>
            </form>
        </AuthLayout>
    );
}
