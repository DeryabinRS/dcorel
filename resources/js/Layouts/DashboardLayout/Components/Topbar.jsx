import { Box, IconButton } from "@mui/material";
import {InputBase, TextField} from "@mui/material";
import {
    MdOutlineLightMode,
    MdOutlineDarkMode,
    MdOutlineNotificationsNone,
    MdSettings,
    MdOutlinePerson,
    MdSearch,
} from "react-icons/md";
import {useDarkMode} from "@/Hooks/useDarkMode";

const Topbar = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);

    return (
        <Box display="flex" justifyContent="space-between" p={2} className="b-gray-200">
            {/* SEARCh BAR */}
            <Box
                display="flex"
                borderRadius="3px"
            >
                <InputBase className="bg-gray-50 dark:bg-gray-700 dark:text-gray-200 border-transparent focus:border-transparent focus:ring-0 px-2" sx={{ml: 1, flex: 1, px: 2}} placeholder="Search"/>
                <IconButton className="dark:text-gray-200" type="button" sx={{p:1, ml: 1}}><MdSearch/></IconButton>
            </Box>

            {/* ICONS Section */}
            <Box display="flex">
                <IconButton className="dark:text-gray-200" onClick={handleMode}>
                    {darkTheme
                        ? <MdOutlineLightMode/>
                        : <MdOutlineDarkMode/>
                    }
                </IconButton>
                <IconButton className="dark:text-gray-200">
                    <MdOutlineNotificationsNone/>
                </IconButton>
                <IconButton className="dark:text-gray-200">
                    <MdSettings/>
                </IconButton>
                <IconButton className="dark:text-gray-200">
                    <MdOutlinePerson/>
                </IconButton>
            </Box>

        </Box>
    )
};

export default Topbar;
