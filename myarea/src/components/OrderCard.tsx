import React, {FC} from "react";
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {Order} from "../logic/OrderRepository";
import {Link} from "react-router-dom";

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
            <Typography variant="h5" color="text.primary">
                {order.departure} to {order.destination} - {order.date}
            </Typography>
        </CardContent>
        <CardActions>
            <Button component={Link} to={`/${order.id}/cancel`} size="small" variant={'contained'} color={'error'}>Cancel</Button>
        </CardActions>
    </Card>
