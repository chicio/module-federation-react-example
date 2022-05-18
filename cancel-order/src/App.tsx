import {createRoot} from "react-dom/client";
import CancelOrderWidget from "./components/CancelOrderWidget";

const App = () => (
    <CancelOrderWidget orderId={"123"} />
);

createRoot(document.getElementById("app")!).render(<App />);
