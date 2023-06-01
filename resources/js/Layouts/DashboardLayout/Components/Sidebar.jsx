import React, { useState } from "react";
import {Sidebar, Menu, MenuItem, SubMenu, useProSidebar} from 'react-pro-sidebar';
import {Box, IconButton, useTheme, Typography} from "@mui/material";
import { Link } from '@inertiajs/react';
import * as MaterialIcons from "react-icons/md";
import {
    MdHome,
    MdPeople,
    MdContacts,
    MdReceipt,
    MdPerson,
    MdCalendarToday,
    MdHelp,
    MdBarChart,
    MdPieChart,
    MdTimeline,
    MdMenu,
    MdMap
} from "react-icons/md";

const arrMenu = [
    {id: 1, title:'Dashboard', url:'/dashboard', icon: 'MdDashboard', submenu: []},
    {id: 2, title:'Events', url:'/dashboard/events', icon: 'MdViewList', submenu: []},
    {id: 3, title:'Event Types', url:'/dashboard/event-types', icon: 'MdViewList', submenu: []},
    {id: 4, title:'Users', url:'/dashboard/users', icon: 'MdPeople', submenu: []},
]

const SidebarItem = ({title, to, icon, selected}) => {
    const Icon = icon ? MaterialIcons[icon] : null;
    return (
        <MenuItem icon={<Icon/>} active={selected} routerLink={<Link href={to} selected={selected}/>}>{title}</MenuItem>
    )
}

const SidebarApp = () => {

    const { collapseSidebar, collapsed } = useProSidebar();
    const [selected, setSelected] = useState('Dashboard')

    return (
        <Box>
            <Sidebar>
                <Box sx={{m:"20px 15px", fontSize: "30px"}} display="flex" justifyContent={!collapsed ? 'end' : 'center'}>
                    <button onClick={() => collapseSidebar()}><MdMenu/></button>
                </Box>
                {/* USER */}
                {!collapsed && (
                    <Box mb="25px">
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <img
                                alt="profile-user"
                                width="80px"
                                height="80px"
                                src="https://sun4-16.userapi.com/s/v1/ig2/LjzEycIT8rJm1QzbXcPNvCoaJ6X8ntkR4hxNkkXOosh4g3ExcrxrfMSjCWAFCdliw5c6VZVMo3613qYqhs1-n6te.jpg?size=200x200&quality=95&crop=184,402,1691,1691&ava=1"
                                style={{cursor: "pointer", borderRadius: "50%"}}
                            />
                        </Box>
                        <Box textAlign="center">
                            <Typography
                                variant="h5"
                                fontWeight="bold"
                                sx={{m:"10px 0 0 0"}}
                            >DeryabinRS</Typography>
                            <Typography variant="h6">Administrator</Typography>
                        </Box>
                    </Box>
                )}
                <Menu>
                    {arrMenu.map(item => <SidebarItem key={item.id} title={item.title} to={item.url} icon={item.icon}/>)}
                    {/*<SubMenu label="Charts">*/}
                    {/*    <MenuItem> Pie charts </MenuItem>*/}
                    {/*    <MenuItem> Line charts </MenuItem>*/}
                    {/*</SubMenu>*/}
                    {/*<MenuItem> Documentation </MenuItem>*/}
                    {/*<MenuItem> Calendar </MenuItem>*/}
                </Menu>
            </Sidebar>
        </Box>

    )
};

export default React.memo(SidebarApp);
