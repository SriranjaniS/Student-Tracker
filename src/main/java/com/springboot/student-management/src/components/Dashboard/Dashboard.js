import React from 'react';
import { Card, CardContent, Typography, Grid, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const cardDetails = [
    { title: 'Subject Details', route: '/subjects' },
    { title: 'Teacher Details', route: '/teachers' },
    { title: 'Student Details', route: '/students' },
    { title: 'Class Details', route: '/classes' },
  ];

  return (
    <Container 
      maxWidth="lg" 
      style={{ 
        padding: '40px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f9f9f9',
      }}
    >
      <Typography 
        variant="h3" 
        align="center" 
        gutterBottom 
        style={{ 
          color: '#007BFF',
          marginBottom: '40px',
        }}
      >
        Dashboard
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {/* First row of cards */}
        <Grid container item spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <Card 
              onClick={() => navigate(cardDetails[0].route)} 
              style={{ cursor: 'pointer', width: '250px' }}
            >
              <CardContent>
                <Typography variant="h5" align="center">
                  {cardDetails[0].title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card 
              onClick={() => navigate(cardDetails[1].route)} 
              style={{ cursor: 'pointer', width: '250px' }}
            >
              <CardContent>
                <Typography variant="h5" align="center">
                  {cardDetails[1].title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        {/* Second row of cards */}
        <Grid container item spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <Card 
              onClick={() => navigate(cardDetails[2].route)} 
              style={{ cursor: 'pointer', width: '250px' }}
            >
              <CardContent>
                <Typography variant="h5" align="center">
                  {cardDetails[2].title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card 
              onClick={() => navigate(cardDetails[3].route)} 
              style={{ cursor: 'pointer', width: '250px' }}
            >
              <CardContent>
                <Typography variant="h5" align="center">
                  {cardDetails[3].title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;
