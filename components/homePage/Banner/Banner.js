"use client";
import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import double from "../../../public/source/banner/doble.png";
import single from "../../../public/source/banner/single.png";
import useMediaQuery from '@mui/material/useMediaQuery';
import Slider from 'react-slick';
import { bannerPics } from './bnData';



const Banner = () => {
    const handleAppointment = (e) => {
        e.preventDefault();
        console.log(e.target.value);
    };
    const isMobileScreen = useMediaQuery("(max-width: 940px)", { noSsr: true });

    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

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
                                <Typography sx={{ fontSize: "3rem", fontWeight: "bolder", color: "#007AFF", md: { fontSize: '1rem', fontWeight: "bold" } }}>Welcome To</Typography>
                                <Typography sx={{ fontSize: "2.2rem", fontWeight: "bolder", color: "#FFFFFF", md: { fontSize: '0.7rem', fontWeight: "bold" } }}>One Call Kuwait</Typography>
                                <Typography sx={{ fontSize: "3rem", fontWeight: "bolder", color: "#FFFFFF", md: { fontSize: '1rem', fontWeight: "bold" } }}>Services</Typography>
                                <a href={`tel:+96566515342`}>
                                    <Typography sx={{ fontSize: "2rem", fontWeight: "bolder", color: "#FFFFFF", md: { fontSize: '0.7rem', fontWeight: "bold" } }}>Connect with Us...</Typography>
                                </a>

                                <Button onClick={(e) => handleAppointment(e)} sx={{ "&:hover": { color: "#FF0000", backgroundColor: "#F1BAA1" }, color: "#ffffff", fontSize: "1rem", py: "1rem", px: "1.5rem", mt: "2rem" }} variant="contained">SCHEDULE AN APPOINTMENT</Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={10} md={6} sx={{ mt: "3rem" }}>
                        <Box sx={{ height: "90vh" }}>
                            <Slider {...settings}>
                                {
                                    bannerPics.map((pic, index) => (
                                        <Box key={index}>
                                            <Image src={pic.pic} alt="One call" style={{ width: "80%", height: '80%' }} />
                                        </Box>
                                    ))
                                }
                            </Slider>
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