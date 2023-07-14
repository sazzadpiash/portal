// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Data
import { Button, Card, Checkbox, Dialog } from "@mui/material";
import { useContext, useState } from "react";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";
import SoftButton from "components/SoftButton";
import { AuthContext } from "context/UserContext";

function CreateUser() {
    const { createUser, updateUser } = useContext(AuthContext);
    const register = (event) => {
        event.preventDefault();
        const userInfo = event.target;
        const displayName = userInfo.name.value;
        const email = userInfo.email.value;
        const pass = userInfo.pass.value;

        createUser(email, pass)
        .then(res => { 
            // console.log(res.user.uid);
            updateUser({displayName})
            .then(response => {
                console.log(res.user.uid);
                fetch(`${process.env.REACT_APP_serverUrl}/update-user`, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({displayName, email, pass})
                  })
                    .then(response => response.json())
                    .then(result => {
                      console.log('User updated:', result);
                      // Handle the response or perform any necessary actions
                    })
                    .catch(error => {
                      console.error('Error:', error);
                      // Handle the error or display an error message
                    });
            })
            .catch((error) => {
            // An error occurred
            // ...
            });
            // console.log(user)
        })
        .catch((error) => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorMessage);
        });
        
    }

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <Card className="w-96 mx-auto mb-20">
                <SoftBox p={3} mb={1} textAlign="center">
                    <SoftTypography variant="h5" fontWeight="medium">
                        Register with
                    </SoftTypography>
                </SoftBox>
                <SoftBox pt={2} pb={3} px={3}>
                    <SoftBox onSubmit={register} component="form" role="form">
                        <SoftBox mb={2}>
                            <SoftInput name="name" placeholder="Name" />
                        </SoftBox>
                        <SoftBox mb={2}>
                            <SoftInput name="email" type="email" placeholder="Email" />
                        </SoftBox>
                        <SoftBox mb={2}>
                            <SoftInput name="pass" type="password" placeholder="Password" />
                        </SoftBox>
                        
                        <SoftBox mt={4} mb={1}>
                            <SoftButton type="submit" variant="gradient" color="dark" fullWidth>
                                create account
                            </SoftButton>
                        </SoftBox>
                    </SoftBox>
                </SoftBox>
            </Card>
            <Footer />
        </DashboardLayout>
    );
}

export default CreateUser;
