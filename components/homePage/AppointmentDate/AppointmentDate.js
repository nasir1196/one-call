"use client";
import React, { useState } from 'react';
import { DatePicker, Select, Space, TimePicker } from 'antd';
import { Box, Button, TextField, Grid } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Image from "next/image"
import Carousel from 'react-material-ui-carousel'
import { appointmentPic } from './data';



const { Option } = Select;
const PickerWithType = ({ type, onChange }) => {
    if (type === 'time') return <TimePicker onChange={onChange} />;
    if (type === 'date') return <DatePicker onChange={onChange} />;
    return <DatePicker picker={type} onChange={onChange} />;
};
const validationSchema = yup.object({

    fullName: yup
        .string('Enter your Full Name')
        .required('Name is required'),
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    phone: yup
        .string("Enter your number")
        .required("Number is required"),
    street: yup
        .string("Enter you address")
        .required("Address is required"),
    city: yup
        .string("Enter you city")
        .required("City is Required"),
    province: yup
        .string("Enter your province")
        .required("Province is required"),
});

const AppointmentDate = () => {
    const [type, setType] = useState('date');
    const [appointment, setAppointment] = useState('');
    console.log(appointment)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, appointment, null, 2));
        },
    });
    return (
        <Box sx={{ m: "2rem" }}>
            <Grid container spacing={4}>
                <Grid item xs="12" md="6">
                    <Box sx={{ m: "1rem" }}>
                        <form onSubmit={formik.handleSubmit}>
                            <Box sx={{ my: "10px" }}>
                                <TextField
                                    fullWidth
                                    id="fullName"
                                    name="fullName"
                                    label="Full Name"
                                    value={formik.values.fullName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                                    helperText={formik.touched.fullName && formik.errors.fullName}
                                />
                            </Box>

                            <Box sx={{ my: "10px" }}>
                                <TextField
                                    fullWidth
                                    id="phone"
                                    name="phone"
                                    label="Phone"
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                                    helperText={formik.touched.phone && formik.errors.phone}
                                />
                            </Box>

                            <Box sx={{ my: "10px" }}>
                                <TextField
                                    fullWidth
                                    id="email"
                                    name="email"
                                    label="Email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                />
                            </Box>

                            <Box sx={{ my: "10px" }}>
                                <TextField
                                    fullWidth
                                    id="street"
                                    name="street"
                                    label="Street"
                                    value={formik.values.street}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.street && Boolean(formik.errors.street)}
                                    helperText={formik.touched.street && formik.errors.street}
                                />
                            </Box>

                            <Box sx={{ my: "10px" }}>
                                <TextField
                                    fullWidth
                                    id="city"
                                    name="city"
                                    label="City"
                                    value={formik.values.city}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.city && Boolean(formik.errors.city)}
                                    helperText={formik.touched.city && formik.errors.city}
                                />
                            </Box>

                            <Box sx={{ my: "10px" }}>
                                <TextField
                                    fullWidth
                                    id="province"
                                    name="province"
                                    label="Province"
                                    value={formik.values.province}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.province && Boolean(formik.errors.province)}
                                    helperText={formik.touched.province && formik.errors.province}
                                />
                            </Box>

                            <Box sx={{ my: "10px" }}>
                                <Space>
                                    <PickerWithType type={type} onChange={(value) => setAppointment(value)} />
                                </Space>
                            </Box>

                            <Button color="primary" variant="contained" fullWidth type="submit">
                                Submit
                            </Button>
                        </form>
                    </Box>
                </Grid>
                <Grid item xs="12" md="6">
                    <Carousel>
                        {
                            appointmentPic.map((pic, index) => (
                                <Box key={index}>
                                    <Image src={pic.pic} alt="One call" style={{ width: "450px", height: '500px' }} />
                                </Box>
                            ))
                        }
                    </Carousel>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentDate;