import AuthenticatedLayout from '@/Layouts/Admin/AuthenticatedLayoutAdmin';
import { Head } from '@inertiajs/react';
import React from 'react'
import { Button, Card, Input, Checkbox, Typography } from "@material-tailwind/react";

export default function HomeAdmin({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Home Admin" />
        </AuthenticatedLayout>
    );
}
