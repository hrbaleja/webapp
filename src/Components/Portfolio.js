import React from 'react';
import { Box, Typography, Grid, Card, CardActionArea, CardContent, CardMedia } from '@mui/material';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque odio nec ipsum finibus, ut varius risus sagittis.',
      imageUrl: 'https://via.placeholder.com/300x200',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Pellentesque ut risus suscipit, eleifend mauris at, consectetur erat. Morbi aliquet eleifend magna, id pharetra odio tempus eu.',
      imageUrl: 'https://via.placeholder.com/300x200',
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce facilisis, tellus sed consequat efficitur.',
      imageUrl: 'https://via.placeholder.com/300x200',
    },
  ];

  return (
    <Box sx={{ py: 6 }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Portfolio
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Card>
              <CardActionArea>
                <CardMedia component="img" height="200" image={project.imageUrl} alt={project.title} />
                <CardContent>
                  <Typography variant="h6" component="div" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
