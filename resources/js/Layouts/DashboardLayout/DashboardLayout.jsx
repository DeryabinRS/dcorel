import { ProSidebarProvider } from 'react-pro-sidebar';
import { Head } from "@inertiajs/react";
import Topbar from "@/Layouts/DashboardLayout/Components/Topbar";
import Sidebar from "@/Layouts/DashboardLayout/Components/Sidebar";
import TitlePage from '@/Layouts/DashboardLayout/Components/TitlePage'


export default function DashboardLayout({ auth, title = 'Dashboard', children }, props) {

    // console.log(props)
    return (
        <ProSidebarProvider>
            <Head title={title}/>
            <div className="grid grid-cols-[auto_minmax(0px,_1fr)] bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
                <Sidebar/>
                <main>
                    <Topbar/>
                    <div className="p-6">
                        <TitlePage title={title}/>
                        {children}
                    </div>
                </main>
            </div>
        </ProSidebarProvider>

    );
}
