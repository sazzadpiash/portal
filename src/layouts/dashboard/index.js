/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components
import BuildByDevelopers from "layouts/dashboard/components/BuildByDevelopers";
import WorkWithTheRockets from "layouts/dashboard/components/WorkWithTheRockets";
import Projects from "layouts/dashboard/components/Projects";
import RequestLoanPopup from "layouts/dashboard/components/RequestLoanPopup";
import StlLoanPopup from "layouts/dashboard/components/Stl";
import OrderOverview from "layouts/dashboard/components/OrderOverview";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import { useEffect, useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

function Dashboard() {
    const { size } = typography;
    const { chart, items } = reportsBarChartData;
    const [open, setOpen] = useState(false);
    const [stl, setStl] = useState(false);
    const [ltl, setLtl] = useState(false);
    const [ifinance, setIfinance] = useState(false);
    const [investments, setInvestments] = useState(false);
    const [loanList, setLoanList] = useState([]);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleStl = () => {
        setStl(true);
        setOpen(false);
    };
    const handleLtl = () => {
        setLtl(true);
    };
    const handleIfinance = () => {
        setIfinance(true);
    };
    const handleInvestments = () => {
        setInvestments(true);
    };
    const handleStlClose = () => {
        setStl(false);
    };
    const handleLtlClose = () => {
        setLtl(false);
    };
    const handleIfinanceClose = () => {
        setIfinance(false);
    };
    const handleInvestmentsClose = () => {
        setInvestments(false);
    };
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        fetch(`http://localhost:5000/loan-request/GETALL`)
            .then(response => response.json())
            .then(data => {
                // Call a function to handle the loan data
                setLoanList(data);
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle the error or display an error message
            });
    }, [])

    const rows = ["COMPANY NAME", "CREATED", "REQUIREMENT", "FUNDED AMOUNT", "TYPE", "STATUS", "FUNDING MANAGER",];

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <SoftBox py={3}>
                <SoftBox mb={3}>
                </SoftBox>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12} lg={12}>
                        <div style={{ textAlign: 'right' }}>
                            <Button
                                variant="contained"
                                style={{ color: 'white', marginBottom: '20px' }}
                                color="primary"
                                onClick={handleOpen}
                            >
                                Request For Loan
                            </Button>
                        </div>
                        {/* <Projects /> */}
                        <div className="bg-white p-4 relative overflow-x-auto" style={{ boxShadow: "0rem 1.25rem 1.6875rem 0rem rgba(0, 0, 0, 0.05)", borderRadius: "16px" }}>
                            <table className="w-full text-sm text-left text-gray-500 ">
                                <thead className="text-xs font-normal text-gray-400 uppercase bg-white border-b">
                                    <tr>

                                        {
                                            rows.map((item, i) => <th key={i} scope="col" className="px-6 py-3 text-[10.4px] font-normal">
                                                {item}
                                            </th>)
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        loanList.map((item, i) => <tr key={i} className="bg-white border-b hover:bg-gray-50 ">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                                {item["business-name"]}
                                            </th>
                                            <td className="px-6 py-4">
                                                {new Date(item?.createdDate).toLocaleDateString()}
                                            </td>
                                            <td className="px-6 py-4">
                                                {item["requirement"] || 'Pending'}
                                            </td>
                                            <td className="px-6 py-4">
                                                {item["funded"] || 'Pending'}
                                            </td>
                                            <td className="px-6 py-4">
                                                {item["type"]}
                                            </td>
                                            <td className="px-6 py-4">
                                                {item["status"] || 'Pending'}
                                            </td>
                                            <td className="px-6 py-4">
                                                {item["manager"] || 'Pending'}
                                            </td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                        <Dialog open={open} onClose={handleClose} PaperProps={{ style: { borderRadius: '12px', padding: "10px" } }}>
                            <RequestLoanPopup
                                handleClose={handleClose}
                                handleStl={handleStl}
                                handleLtl={handleLtl}
                                handleIfinance={handleIfinance}
                                handleInvestments={handleInvestments}
                            />
                        </Dialog>
                        <Dialog open={stl} onClose={handleClose} PaperProps={{ style: { borderRadius: '12px', padding: "10px", width: "700px", maxWidth: "700px" } }}>
                            <StlLoanPopup
                                handleStlClose={handleStlClose}
                            />
                        </Dialog>
                    </Grid>
                </Grid>
            </SoftBox>
            <Footer />
        </DashboardLayout>
    );
}

export default Dashboard;
