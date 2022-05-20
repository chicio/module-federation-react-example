import {createServer} from "miragejs";
import {Server} from "miragejs/server";

export const server: () => Server = () => createServer({
    logging: true,
    routes() {
        this.get("/api/widgets", () => ({
            cancellationOrderWidgetUrl: 'http://localhost:3001',
        }))
    },
})
