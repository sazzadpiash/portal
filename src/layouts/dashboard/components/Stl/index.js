// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import PropTypes from 'prop-types';

import { Button, Checkbox, DialogActions, DialogContent, DialogTitle, Grid } from "@mui/material";
import SoftInput from "components/SoftInput";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

function StlLoan({ handleStlClose }) {

    console.log(`http://localhost:5000/loan-request`);

    const logs = (e) => {
        e.preventDefault()
        console.log(e.target.businessName.value);

        const loanData = {
            "business-type":e?.target?.businessType?.value,
            "business-name":e?.target?.businessName?.value,
            "business-contact-name":e?.target?.contactName?.value,
            "business-phone":e?.target?.phone?.value,
            "business-email":e?.target?.email?.value,
            "business-address":e?.target?.businessAddress?.value,
            "business-chip":e?.target?.chipPin?.value,
            "business-turnover":e?.target?.businessTurnover?.value,
            "business-invoice":e?.target?.invoice?.value,
            "business-statement":e?.target?.bankStatement?.value,
            "business-notes":e?.target?.notes?.value,
            "user": '0000',
            "type": "Short Term Loan",
            "createdDate": new Date().toISOString()
          };


        fetch(`http://localhost:5000/loan-request`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(loanData)
          })
            .then(response => response.json())
            .then(result => {
              console.log('Loan request submitted:', result);
              handleStlClose();
              // Handle the response or perform any necessary actions
            })
            .catch(error => {
              console.error('Error:', error);
              // Handle the error or display an error message
            });

    }
    return (
        <SoftBox style={{ borderRadius: '20px !important' }}>
            <DialogTitle>Fill Up The Form:</DialogTitle>
            <DialogContent>
                <SoftBox>
                    <SoftBox component="form" onSubmit={logs} role="form">
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <SoftBox mb={2}>
                                    <SoftInput name="businessName" placeholder="Business Name" />
                                </SoftBox>
                                <SoftBox mb={2}>
                                    <SoftInput name="businessType" placeholder="Business Type" />
                                </SoftBox>
                                <SoftBox mb={2}>
                                    <SoftInput name="contactName" placeholder="Contact Name" />
                                </SoftBox>
                                <SoftBox mb={2}>
                                    <SoftInput name="phone" placeholder="Phone number" />
                                </SoftBox>
                                <SoftBox mb={2}>
                                    <SoftInput name="email" type="email" placeholder="Email" />
                                </SoftBox>
                            </Grid>
                            <Grid item xs={6}>
                                <SoftBox mb={2}>
                                    <SoftInput name="businessAddress" placeholder="Business Address" />
                                </SoftBox>
                                <SoftBox mb={2}>
                                    <SoftInput name="chipPin" placeholder="Chip & Pin monthly" />
                                </SoftBox>
                                <SoftBox mb={2}>
                                    <SoftInput name="businessTurnover" placeholder="Business Turnover Monthly" />
                                </SoftBox>
                                <SoftBox mb={2}>
                                    <SoftInput name="invoice" placeholder="Do they Invoice" />
                                </SoftBox>
                                <SoftBox mb={2}>
                                    <SoftInput name="bankStatement" placeholder="Upload 6 months bank statement" />
                                </SoftBox>
                            </Grid>
                        </Grid>




                        <SoftBox mb={2}>
                            <SoftInput name="notes" placeholder="Notes" />
                        </SoftBox>
                        <SoftButton variant="gradient" type="submit" color="dark" fullWidth>
                            Send Request
                        </SoftButton>
                    </SoftBox>

                </SoftBox>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleStlClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </SoftBox>
    );
}

StlLoan.propTypes = {
    handleStlClose: PropTypes.func.isRequired,
};

export default StlLoan;
