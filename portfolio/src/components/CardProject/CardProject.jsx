import { Card, CardContent, CardActions, Typography, Button, Link } from '@mui/material';

export default function MediaCard({project}) {

  return (

    <Card sx={{
      width: 900,
      height: 600,
      backgroundColor: '#484848',
      borderRadius: 4,
      textAlign: 'center',
      color: '#CAB84A',
      margin: 5,
      boxShadow: '0px 0px 18px white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center', // Centrar verticalmente
      alignItems: 'center', // Centrar horizontalmente
      
    }}>
      <CardContent>

        <Typography
          gutterBottom variant="h3"
          component="div"
          fontFamily='Chakra Petch'
          sx={{
            wordWrap: 'break-word',  // Permite el salto de línea dentro de las palabras
          }}>
          {project.nameProject}
        </Typography>

        <Typography
          variant="body2"
          color="aliceblue"
          sx={{
            wordWrap: 'break-word',  // Permite el salto de línea dentro de las palabras
          }}>
          {project.info}
        </Typography>

      </CardContent>

      <CardActions>

        <Button
          size="small"
          color='primary'
          sx={{
            backgroundColor: '#484848', // Mismo color que la tarjeta
            color: 'white', // Texto blanco
            '&:hover': {
              backgroundColor: '#606060', // Cambio de color al pasar el ratón
            },
          }} >
          <Link
            href={project.image}
            target="_blank"
            rel="noopener"
            color='#484848'
            sx={{
              color: '#CAB84A', // Texto blanco
              textDecoration: 'none', // Sin subrayado
            }}
            >
            Visitar sitio web
          </Link>
        </Button>
        
      </CardActions>
    </Card>

  );
};
