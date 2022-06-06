import {FC} from "react";
import {Container, GlobalStyles} from "@mui/material";
import {InMemoryOrderRepository} from "./logic/OrderRepository";
import {Header} from "./components/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {OrdersPage} from "./pages/OrdersPage";
import {CancelOrderPage} from "./pages/CancelOrderPage";
import {createRoot} from "react-dom/client";

const App: FC = () => (
    <>
        <GlobalStyles styles={{body: {margin: 0, padding: 0}}}/>
        <Header/>
        <Container sx={{my: 3}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<OrdersPage orderRepository={new InMemoryOrderRepository()}/>} />
                    <Route path={"/:orderId/cancel"} element={<CancelOrderPage />}/>
                </Routes>
            </BrowserRouter>
        </Container>
    </>
);

createRoot(document.getElementById("app")!).render(<App />);
