import {server} from "./server";
import {loadConfiguration} from "./logic/Configuration";

server()

loadConfiguration().then( () => {
    import("./App");
})
