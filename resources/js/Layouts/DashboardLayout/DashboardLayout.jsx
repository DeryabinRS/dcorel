import { ProSidebarProvider } from 'react-pro-sidebar';
import { Head } from "@inertiajs/react";
import Topbar from "@/Layouts/DashboardLayout/Components/Topbar";
import Sidebar from "@/Layouts/DashboardLayout/Components/Sidebar";
import TitlePage from '@/Layouts/DashboardLayout/Components/TitlePage'
import Footer from "@/Layouts/DashboardLayout/Components/Footer";


export default function DashboardLayout({ auth, title = 'Dashboard', children }, props) {

    // console.log(props)
    return (
        <ProSidebarProvider>
            <Head title={title} />
            <div className="h-100 grid grid-cols-[auto_minmax(0px,_1fr)] bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
                <Sidebar />
                <main className="grid grid-rows-[auto_1fr_auto]">
                    <Topbar/>
                    <div className="px-6 py-2">
                        <TitlePage title={title}/>
                        {children}
                    </div>
                    <Footer />
                </main>
            </div>
        </ProSidebarProvider>

    );
}
