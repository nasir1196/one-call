"use Client";
import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import About from '../About/About';
import ServiceArea from '../ServieArea/ServiceArea';
import Support from '../Support/Support';
import Review from '../Review/Review';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Footer from '../../Shared/Footer/Footer';
import { Box } from '@mui/material';

const Home = () =>
{
    return (
        <Box>
            <Box>
                <Banner />
            </Box>
            <Box>
                <Services />
            </Box>
            <Box>
                <About />
            </Box>
            <Box>
                <ServiceArea />
            </Box>
            <Box>
                <Support />
            </Box>
            <Box>
                <Review />
            </Box>
            <Box>
                <Blog />
            </Box>
            <Box>
                <Contact />
            </Box>
            <Box>
                <Footer />
            </Box>
        </Box>
    );
};

export default Home;