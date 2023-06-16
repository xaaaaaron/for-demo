import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

type Props = {
    img: string,
    qty: number,
    price: number,
    title: string,
    desc?: string,
}

export default function Item({qty, price, title, img, desc}: Props) {
  const theme = useTheme();

  return (
    <div className="mx-20">
    <Card sx={{ display: 'flex' }}>
         <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={img}
            alt={title}
        />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          {title}
          </Typography>
          <Typography variant="subtitle1" component="div">
          Quantity: {qty} Price: ${price}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 2, pb: 1 }}>
        <Typography variant="subtitle1" color="text.secondary" component="div">
         {desc}
          </Typography>
        </Box>
      </Box>
     
    </Card>
    </div>
  );
}