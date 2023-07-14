// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import PropTypes from 'prop-types';

import { Button, DialogActions, DialogContent, DialogTitle, Grid } from "@mui/material";

function RequestLoanPopup({ handleClose, handleStl }) {


    return (
        <SoftBox style={{ width: '400px', borderRadius: '20px !important'}}>
            <DialogTitle>Please Select a Loan Type:</DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Button
                            variant="contained"
                            style={{ color: 'white', width: '100%' }}
                            color="primary"
                            onClick={handleStl}
                        >
                            Short Term Loan
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            variant="contained"
                            style={{ color: 'white', width: '100%' }}
                            color="primary"
                        >
                            Long Term Loan
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            variant="contained"
                            style={{ color: 'white', width: '100%' }}
                            color="primary"
                        >
                            Invoice Finance
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            variant="contained"
                            style={{ color: 'white', width: '100%' }}
                            color="primary"
                        >
                            Investments
                        </Button>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </SoftBox>
    );
}

RequestLoanPopup.propTypes = {
    handleClose: PropTypes.func.isRequired,
    handleStl: PropTypes.func.isRequired,
};

export default RequestLoanPopup;
