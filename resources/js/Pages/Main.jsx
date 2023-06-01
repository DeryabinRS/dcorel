import MainLayout from "@/Layouts/MainLayout/MainLayout";
import React from "react";

function Main(props) {

    return (
        <div>
        123
        </div>
    );
}

Main.layout = (page) => <MainLayout title={"DCore"} children={page} {...page.props}/>

export default Main
