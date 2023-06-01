import React from 'react';
import DashboardLayout from "@/Layouts/DashboardLayout/DashboardLayout";
import { Box } from "@mui/material";

const Dashboard = (props) => {
    console.log(props)
    return (
        <Box>
            <div className="p-6">You're logged in!</div>
        </Box>
    );
}

Dashboard.layout = (page) => <DashboardLayout title={"Dashboard"} children={page}/>

export default Dashboard
