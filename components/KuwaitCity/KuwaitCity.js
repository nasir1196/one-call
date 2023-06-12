"use client";
import React from 'react';
import { Typography, Box, ListItemButton, ListItemText } from '@mui/material';
import Link from 'next/link';

const KuwaitCity = () =>
{
    const ourRegion = [
        { title: "Al Ahmadi", pathName: "/kuwaitCities/alAhmadi" },
        { title: "Ḩawallī", pathName: "/kuwaitCities/hawalli" },
        { title: "Şabāḩ as Sālim", pathName: "/kuwaitCities/sabah" },
        { title: "Al Farwānīyah", pathName: "/kuwaitCities/farwaniyah" },
        { title: "Al Faḩāḩīl", pathName: "/kuwaitCities/fahahil" },
        { title: "Kuwait City", pathName: "/kuwaitCities/kuwait" },
    ];
    return (
        <Box>
            {
                ourRegion.map( ( item, index ) => (
                    <Box key={ index }>
                        <Link href={ item.pathName } >
                            <ListItemButton>
                                <ListItemText primary={ item.title } />
                            </ListItemButton>
                        </Link>
                        {/* <Box>
                            <Link href="/kuwaitCities">Kuwait Cities Area</Link>
                        </Box> */}
                    </Box>
                ) )
            }
        </Box>
    );
};

export default KuwaitCity;