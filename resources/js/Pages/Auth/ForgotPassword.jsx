import { Head, useForm } from '@inertiajs/react';
import AuthLayout from "@/Layouts/AuthLayout/AuthLayout";
import {Button, TextField} from "@mui/material";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <AuthLayout>
            <Head title="Forgot Password" />

            <div className="mb-4 text-sm text-gray-600">
                Forgot your password? No problem. Just let us know your email address and we will email you a password
                reset link that will allow you to choose a new one.
            </div>

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit} className="w-full">
                <TextField
                    id="email"
                    type="email"
                    label="Email Address"
                    name="email"
                    value={data.email}
                    margin="normal"
                    required
                    fullWidth
                    autoFocus
                    onChange={onHandleChange}
                    error={errors.email ? true : false}
                    helperText={errors.email}
                />

                <div className="flex items-center justify-center mt-4">
                    <Button
                        className="ml-4"
                        disabled={processing}
                        variant="contained"
                        type="submit"
                        fullWidth
                    >
                        Email Password Reset Link
                    </Button>
                </div>
            </form>
        </AuthLayout>
    );
}
