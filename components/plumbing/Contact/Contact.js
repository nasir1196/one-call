import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';

import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import PhoneIcon from '@mui/icons-material/Phone';


const Contact = () =>
{


    const handleSubmit = ( e ) =>
    {
        e.preventDefault();
    };
    return (
        <Box sx={ { px: "2rem", my: { md: "5rem", xs: '2rem' } } }>
            <Grid container spacing={ 3 }>
                <Grid item xs={ 12 } md={ 6 }>
                    <Box sx={ { px: "2rem" } }>
                        <Typography sx={ { fontSize: "1rem", color: '#007AFF' } }>CONTACT US</Typography>
                        <Typography sx={ { fontSize: '2.5rem', fontWeight: "bold" } }>Get a fast response, call us now</Typography>
                        <Box sx={ { my: { md: "3rem", xs: "1.7rem" } } }>
                            <Typography sx={ { width: { md: "50%", xs: "90%" } } }>Lorem ipsum dolor sit amet, consectetur adipiscing elit. pulvinar dapibus leo.</Typography>
                        </Box>
                    </Box>

                    <Box sx={ { width: { md: "60%", xs: "90%" }, m: "0 auto" } }>
                        <Grid container spacing={ 2 }>
                            <Grid item xs={ 6 } md={ 6 }>

                                <Box sx={ { display: "flex", alignItems: "center", my: "0.6rem" } }>
                                    <Box>
                                        <PhoneIcon sx={ { fontSize: "2rem", fontWeight: "bold" } } />
                                    </Box>
                                    <Box sx={ { mx: "0.8rem" } }>
                                        <Typography>
                                            BOOK ONLINE
                                        </Typography>
                                        <Typography>+120 012 668</Typography>
                                    </Box>
                                </Box>
                                <Box sx={ { display: "flex", alignItems: "center", my: "0.6rem" } }>
                                    <Box>
                                        <LocationOnIcon sx={ { fontSize: "2rem", fontWeight: "bold" } } />
                                    </Box>
                                    <Box sx={ { mx: "0.8rem" } }>
                                        <Typography>
                                            LOCATION
                                        </Typography>
                                        <Typography>Kuwait City</Typography>
                                    </Box>
                                </Box>


                            </Grid>
                            <Grid item xs={ 6 } md={ 6 }>
                                <Box sx={ { display: "flex", alignItems: "center", my: "0.6rem" } }>
                                    <Box>
                                        <MarkEmailReadIcon sx={ { fontSize: "2rem", fontWeight: "bold" } } />
                                    </Box>
                                    <Box sx={ { mx: "0.8rem" } }>
                                        <Typography>
                                            EMAIL
                                        </Typography>
                                        <Typography>oncallkuwait1@gmail.com</Typography>
                                    </Box>
                                </Box>
                                <Box sx={ { display: "flex", alignItems: "center", my: "0.6rem" } }>
                                    <Box>
                                        <QueryBuilderIcon sx={ { fontSize: "2rem", fontWeight: "bold" } } />
                                    </Box>
                                    <Box sx={ { mx: "0.8rem" } }>
                                        <Typography>
                                            OPEN HOURS
                                        </Typography>
                                        <Typography>24/7 Days</Typography>
                                    </Box>
                                </Box>

                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={ 12 } md={ 6 } >
                    <form onSubmit={ () => handleSubmit( e ) }>
                        <Box sx={ { my: "1.5rem", backgroundColor: "#F2F3F3", py: { md: "3rem", xs: "2rem" } } }>
                            <Box sx={ { display: { md: 'flex', xs: "initial" }, justifyContent: "center", alignItems: "center" } }>
                                <FormControl sx={ { m: 1, width: '25ch' } } variant="filled">
                                    <TextField
                                        label="First Name"
                                        sx={ { m: 1, width: { md: '25ch', xs: "40ch" } } }
                                        variant="filled"
                                    />
                                </FormControl>
                                <FormControl sx={ { m: 1, width: '25ch' } } variant="filled">
                                    <TextField
                                        label="Last Name"
                                        sx={ { m: 1, width: { md: '25ch', xs: "40ch" } } }
                                        variant="filled"
                                    />
                                </FormControl>
                            </Box>

                            <Box sx={ { display: { md: 'flex', xs: "initial" }, justifyContent: "center", alignItems: "center" } }>
                                <FormControl sx={ { m: 1, width: '25ch' } } variant="filled">
                                    <TextField
                                        label="Phone Number"
                                        sx={ { m: 1, width: { md: '25ch', xs: "40ch" } } }
                                        variant="filled"
                                    />
                                </FormControl>
                                <FormControl sx={ { m: 1, width: '25ch' } } variant="filled">
                                    <TextField
                                        label="Email"
                                        sx={ { m: 1, width: { md: '25ch', xs: "40ch" } } }
                                        variant="filled"
                                    />
                                </FormControl>
                            </Box>

                            <Box sx={ { width: { md: "70%", xs: "98%" }, m: "0 auto" } }>
                                <FormControl fullWidth sx={ { m: 1 } } variant="standard">
                                    <InputLabel htmlFor="standard-adornment-message">Message</InputLabel>
                                    <Input
                                        id="standard-adornment-message"
                                    />
                                </FormControl>
                                <Button sx={ { width: "100%", color: "#FFFFFF", backgroundColor: "#1976D2", m: "1rem", p: { md: "0.7rem", xs: "0.4rem" }, "&:hover": { backgroundColor: "#F7BF23", color: "black" } } }>Send Message</Button>
                            </Box>
                        </Box>
                    </form>
                </Grid>
            </Grid>
        </Box >
    );
};

export default Contact;