import React, {FC} from "react";
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {Order} from "../logic/OrderRepository";

interface Props {
    order: Order
}

export const OrderCard: FC<Props> = ({ order }) =>
    <Card sx={{ my : 2 }}>
        <CardMedia
            component="img"
            height="300"
            image="https://picsum.photos/1200/300"
            alt="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">

            </Typography>
            <Typography variant="body2" color="text.secondary">
                {order.departure} {order.destination} - {order.date}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" variant={'contained'} color={'error'}>Cancel</Button>
        </CardActions>
    </Card>
