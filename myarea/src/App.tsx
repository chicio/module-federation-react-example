import React, {FC} from "react";
import ReactDOM from "react-dom";
import {Container} from "@mui/material";
import {createGlobalStyle} from "styled-components";
import {OrderCard} from "./components/OrderCard";
import {InMemoryOrderRepository, OrderRepository} from "./logic/OrderRepository";
import {Header} from "./components/Header";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

interface Props {
    orderRepository: OrderRepository;
}

const App: FC<Props> = ({ orderRepository }) => (
    <>
        <GlobalStyle/>
        <Header />
        <Container sx={{my : 3}}>
            {orderRepository.get().map(order => <OrderCard order={order} key={order.id}/>)}
        </Container>
    </>
);

ReactDOM.render(<App orderRepository={new InMemoryOrderRepository()}/>, document.getElementById("app"));
