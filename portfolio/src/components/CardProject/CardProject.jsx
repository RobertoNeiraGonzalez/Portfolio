import { Card, CardContent, CardActions, Typography, Button, Link } from '@mui/material';



export default function MediaCard() {

  return (

    <Card sx={{ 
      width: 500, 
      height: 400, 
      backgroundColor: '#242424',
      borderRadius: 10, 
      textAlign: 'center', 
      color: 'gold',
      margin: 10 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          Way Home
        </Typography>
        <Typography variant="body2" color="white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat atque, sunt quia doloribus distinctio nemo omnis doloremque porro illum facilis obcaecati dolores, voluptates incidunt! Deserunt blanditiis ipsum, repellendus aliquid voluptatem amet molestias consectetur quibusdam nobis? Rerum molestiae unde dolore exercitationem facilis saepe minima quae quas libero aliquam. Odit numquam, velit quis sunt nam vel odio laudantium repellendus ad, suscipit eius quasi corrupti iste ex tempora aperiam ipsum. Temporibus ipsa officia rerum porro, necessitatibus dignissimos expedita nam adipisci commodi optio corporis laboriosam nihil veritatis iusto ratione odio dolores enim molestias ea eum tenetur reprehenderit asperiores nulla. Ducimus quod laudantium reprehenderit ea?
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link href="https://sprightly-arithmetic-ea72f8.netlify.app/login" target="_blank" rel="noopener" >
            Visitar sitio web
          </Link>
        </Button>
      </CardActions>
    </Card>

  );
};
