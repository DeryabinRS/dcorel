import React from 'react';
import { Typography } from '@mui/material'

const TitlePage = ({title = 'Title Page'}) => {
    return (
        <Typography variant={'h1'} className="!font-bold !text-[40px]">{title}</Typography>
    );
};

export default TitlePage;
