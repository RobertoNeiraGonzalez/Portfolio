import { Card, CardContent, CardActions, Typography, Button, Link } from '@mui/material';

export default function MediaCard({project}) {

  return (

    <Card sx={{
      width: 500,
      height: 400,
      backgroundColor: '#0F272F',
      borderRadius: 10,
      textAlign: 'center',
      color: '#2D809F',
      margin: 10
    }}>
      <CardContent>

        <Typography
          gutterBottom variant="h3"
          component="div"
          fontFamily='Chakra Petch'>
          {project.nameProject}
        </Typography>

        <Typography
          variant="body2"
          color="#2D809F">
          {project.info}
        </Typography>

      </CardContent>

      <CardActions>

        <Button
          size="small"
          color='primary' >
          <Link
            href={project.image}
            target="_blank"
            rel="noopener"
            color='#2D809F'
            textAlign='center'>
            Visitar sitio web
          </Link>
        </Button>
        
      </CardActions>
    </Card>

  );
};
