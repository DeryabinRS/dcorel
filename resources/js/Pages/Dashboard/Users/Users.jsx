import React from 'react';
import DashboardLayout from "@/Layouts/DashboardLayout/DashboardLayout";

const Users = (props) => {
    console.log(props)
    return (
        <div>

        </div>
    );
};

Users.layout = (page) => <DashboardLayout title={"Users"} children={page}/>

export default Users;
