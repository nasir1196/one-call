import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import plumberPic from "../../../public/source/oneCall/plumber/comod-man.png"
import satellitePic from "../../../public/source/oneCall/satellight/dish-antena (3).png"
import electricPic from "../../../public/source/oneCall/electric/man-show.png"
import craftPainterPic from "../../../public/source/oneCall/carftPrint/pngegg (3).png"
import "./services.css"
import Image from "next/image"

const Services = () => {
    return (
        <Box sx={{ m: '0 auto', p: "3rem" }}>
            <Box>
                <Typography sx={{ textAlign: "center", fontSize: '3rem', fontWeight: "bold" }}>OUR SERVICES</Typography>
            </Box>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                    <Link href="/plumbing">
                        <Box sx={{ border: '1px solid gray', borderRadius: '5px', boxShadow: '2px 2px 1px 1px #efe2b3' }}>

                            <Image className="image-container" layout="responsive" src={plumberPic} alt="plumber" />
                            Plumbing
                        </Box>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Link href="/satellite">
                        <Box sx={{ border: '1px solid gray', borderRadius: '5px', boxShadow: '2px 2px 1px 1px #efe2b3' }}>
                            <Image className="image-container" layout="responsive" src={satellitePic} alt="plumber" />
                            Satellite
                        </Box>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Link href="/electric">
                        <Box sx={{ border: '1px solid gray', borderRadius: '5px', boxShadow: '2px 2px 1px 1px #efe2b3' }}>
                            <Image className="image-container" layout="responsive" src={electricPic} alt="electric" />
                            Electric
                        </Box>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Link href="/craftPainter">
                        <Box sx={{ border: '1px solid gray', borderRadius: '5px', boxShadow: '2px 2px 1px 1px #efe2b3' }}>
                            <Image className="image-container" layout="responsive" src={craftPainterPic} alt="plumber" />
                            Craft Painter
                        </Box>
                    </Link>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Services