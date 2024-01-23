import './CardBackground.css'

import { Card, CardContent, CardActions, Typography, Button, Link } from '@mui/material';

function CardBackground({ background }) {
  return (
    <Card sx={{
      width: 900,
      height: 600,
      backgroundColor: '#484848',
      borderRadius: 4,
      textAlign: 'center',
      color: '#CAB84A',
      margin: 5,
      boxShadow: '0px 0px 18px #CAB84A',
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
          {background.Category}
        </Typography>

        <Typography
          variant="body2"
          color="aliceblue"
          sx={{
            wordWrap: 'break-word',  // Permite el salto de línea dentro de las palabras
          }}>
          {background.info}
        </Typography>
        <br />
        <Typography
          variant="body2"
          color="aliceblue"
          sx={{
            wordWrap: 'break-word',  // Permite el salto de línea dentro de las palabras
          }}>
          {background.info2}
        </Typography>
        <br />
        <Typography
          variant="body2"
          color="aliceblue"
          sx={{
            wordWrap: 'break-word',  // Permite el salto de línea dentro de las palabras
          }}>
          {background.info3}
        </Typography>

      </CardContent>

      <CardActions>

        <Typography
          size="small"
          color='primary'
          sx={{
            backgroundColor: '#484848', // Mismo color que la tarjeta
            color: '#CAB84A', // Texto blanco
          }} >
          
           
            {`${background.years} Meses`}
          
        </Typography>

      </CardActions>

    </Card>
  )
}

export default CardBackground