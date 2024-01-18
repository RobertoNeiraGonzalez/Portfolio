import { Card, CardContent, CardActions, Typography, Button, Link } from '@mui/material';

export default function MediaCard() {

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
          Way Home
        </Typography>

        <Typography
          variant="body2"
          color="#2D809F">
          Decidimos desarrollar este proyecto con el fin de ayudar a perros y gatos que muchas veces sufren de soledad y peor aún el abandono. <br />
          Con esta comunidad creemos que se puede ayudar a personas que por las razones que sean tengan las opciones de ponerlo en acogida por una temporada,
          ya sea porque se tiene que mudar temporalmente y no puede llevarse a su animal o porque necesitan una largas vacaciones,
          la comunidad está llena de personas altruístas que aman a los animales y colaboran mutuamente, digamos un "Hoy por ti, mañana por mí". <br />
          Y para aquellos casos más graves en los que definitivamente no se pueden hacer más cargo de sus mascotas, podemos buscarle una familia nueva en esta
          comunidad sin tener que llegar a dejarlo en un albergue o protectora, evitando el sufrimiento al animal.
        </Typography>

      </CardContent>

      <CardActions>

        <Button
          size="small"
          color='primary' >
          <Link
            href="https://sprightly-arithmetic-ea72f8.netlify.app/login"
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
