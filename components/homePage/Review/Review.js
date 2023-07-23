import React from 'react';
import {Box, CardActionArea} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Slider from "react-slick";
import {customers} from './data';

const Review = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };
    const primaryBlue = "#002bff"
    return (
        <Box sx={{
            py: {md: "3.5rem", xs: "1.5rem"},
            backgroundColor: "#FFA500",
            borderBottom: `1rem solid ${primaryBlue}`
        }}>
            <Typography sx={{textAlign: "center", fontWeight: 'bold', fontSize: "1.5rem", m: "1.5rem",
                color: primaryBlue}}> THE ONE CALL
                KUWAIT MOVEMENT</Typography>
            <Typography sx={{textAlign: "center", fontWeight: 'bold', fontSize: "3rem", mb: "2.5rem", color:primaryBlue}}> What our
                customers say</Typography>
            <Box sx={{width: {md: "60%", xs: "90%"}, m: '0 auto'}}>
                <Slider {...settings}>
                    {
                        customers.map((customer, index) => (
                            <Box key={index}>
                                <Card sx={{maxWidth: 345}}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={customer.imgUrl}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {customer.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {customer.description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Box>
                        ))
                    }
                </Slider>
            </Box>
        </Box>
    );
};

export default Review;