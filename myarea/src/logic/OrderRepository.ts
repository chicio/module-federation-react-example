export interface Order {
    id: number
    departure: string;
    destination: string;
    date: string;
}

export interface OrderRepository {
    get(): Order[]
}

export class InMemoryOrderRepository implements OrderRepository {
    get(): Order[] {
        return [
            {
                id: 123,
                departure: "Milan",
                destination: "London",
                date: "20 June 2022"
            },
            {
                id: 456,
                departure: "Milan",
                destination: "Paris",
                date: "10 September 2022"
            }
        ];
    }
}
