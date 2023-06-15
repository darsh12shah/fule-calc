import React from 'react';
import { Stack, Typography } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Result = ({ data }) => {
  //Calculation of the different parameters to obtain their accurate percentages
  const { homeValue, loanAmount, loanTerm, interestRate,downPayment } = data;
  const totalLoanMonths = loanTerm * 12;
  const interestPerMonth = interestRate / 100 / 12;
  const monthlyPayment = 
   downPayment*interestRate;
  
   return (
    <Stack  gap={3}>
    <Typography textAlign="center"variant="h5">
      Toral Disitance:
      {
      monthlyPayment.toFixed(2)
      }
      km
    </Typography>
      </Stack>
  );
}

export default Result