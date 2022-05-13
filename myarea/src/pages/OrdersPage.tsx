import {FC} from "react";
import {OrderRepository} from "../logic/OrderRepository";
import {OrderCard} from "../components/OrderCard";

interface Props {
    orderRepository: OrderRepository;
}

export const OrdersPage: FC<Props> = ({ orderRepository }) =>
    <>
        {orderRepository.get().map(order => <OrderCard order={order} key={order.id}/>)}
    </>
