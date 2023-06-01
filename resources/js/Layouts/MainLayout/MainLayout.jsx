import React from 'react';
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";

const MainLayout = (props) => {
    const { title, auth, children } = props;
    return (
        <>
            <Head title={title} />
            <Navbar auth={auth}/>

            <div className="sm:mt-[65px] bg-gray-100 dark:bg-gray-900">
                {children}
            </div>
        </>
    );
};

export default MainLayout;
