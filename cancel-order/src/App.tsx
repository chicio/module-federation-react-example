import {CancelOrderWidget} from "./components/CancelOrderWidget";
import {createRoot} from "react-dom/client";

const App = () => (
    <CancelOrderWidget orderId={123} />
);

createRoot(document.getElementById("app")!).render(<App />);
