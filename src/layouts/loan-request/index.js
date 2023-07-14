
// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components
import Projects from "layouts/dashboard/components/Projects";

// Data
import { Button, Dialog} from "@mui/material";
import { useState } from "react";

function RequestLoan() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <DashboardLayout>
            <DashboardNavbar />
            <SoftBox py={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12} lg={12}>
                        <div style={{ textAlign: 'right' }}>
                            <Button
                                variant="contained"
                                style={{ color: 'white', marginBottom: '20px' }}
                                color="primary"
                                onClick={handleOpen}
                            >
                                Open Popup
                            </Button>
                        </div>

                        <Projects />
                        <Dialog open={open} onClose={handleClose}>
                            
                            
                        </Dialog>
                    </Grid>
                </Grid>
            </SoftBox>
            <Footer />
        </DashboardLayout>
    );
}

export default RequestLoan;
