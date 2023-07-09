"use Client";
import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import bannerPic from "../../../public/source/banner/Heros-02.png";
import double from "../../../public/source/banner/doble.png";
import single from "../../../public/source/banner/single.png";
import useMediaQuery from '@mui/material/useMediaQuery';




const Banner = () => {
    const handleAppointment = (e) => {
        e.preventDefault();
        console.log(e.target.value);
    };
    const isMobileScreen = useMediaQuery("(max-width: 940px)", { noSsr: true });

    const offer = [
        {
            pic: double,
            title: "No call out fees",
            subTitle: "Lorem ipsum dolor sit amet"
        },
        {
            pic: single,
            title: "Senior Discount",
            subTitle: "Lorem ipsum dolor sit amet"
        },
        {
            pic: double,
            title: "Price by job",
            subTitle: "Lorem ipsum dolor sit amet"
        },
    ];
    return (
        <Box>
            <Box sx={{ backgroundColor: "#041B35" }}>
                <Grid container spacing={2} >
                    <Grid item xs={10} md={6}>
                        <Box sx={{ m: "5rem auto", width: "50%" }}>
                            <Box>
                                <Typography sx={{ fontSize: "3rem", fontWeight: "bolder", color: "#007AFF", md: { fontSize: '1rem', fontWeight: "bold" } }}>EMERGENCY</Typography>
                                <Typography sx={{ fontSize: "3rem", fontWeight: "bolder", color: "#FFFFFF", md: { fontSize: '1rem', fontWeight: "bold" } }}>PLUMBING</Typography>
                                <Typography sx={{ fontSize: "3rem", fontWeight: "bolder", color: "#FFFFFF", md: { fontSize: '1rem', fontWeight: "bold" } }}>SOLUTION</Typography>

                                <Button onClick={(e) => handleAppointment(e)} sx={{ "&:hover": { color: "#FF0000", backgroundColor: "#F1BAA1" }, color: "#ffffff", fontSize: "1rem", py: "1rem", px: "1.5rem", mt: "2rem" }} variant="contained">SCHEDULE AN APPOINTMENT</Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={10} md={6} sx={{ mt: "3rem" }}>
                        <Box sx={{ height: "90vh" }}>
                            <Image style={{ width: "90%", height: "100%" }} src={bannerPic} alt="Banner" />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ mx: "3rem", my: "2rem" }}>
                <Grid container spacing={8}>
                    {
                        offer.map((offer, index) => (
                            <Grid item xs={12} md={4} key={index + 1}>
                                <Box sx={{ display: { md: "flex", xs: "initial" }, alignItems: "center", justifyContent: "center" }}>
                                    {
                                        isMobileScreen ? (
                                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                <Image style={{ width: "26%", height: "26%" }} src={offer.pic} alt="quality area" />
                                            </Box>
                                        ) : (
                                            <Image style={{ width: "26%", height: "26%", margin: "0 auto", alignItems: "center" }} src={offer.pic} alt="quality area" />
                                        )
                                    }
                                    <Box>
                                        <Typography sx={{ fontSize: { md: "2rem", xs: "1rem" }, textAlign: "center", fontWeight: "bold" }}>{offer.title}</Typography>
                                        <Typography sx={{ textAlign: "center", }}>{offer.subTitle}</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        ))
                    }

                </Grid>
            </Box>
        </Box>
    );
};

export default Banner;