import React, {FC, Suspense} from "react";
import {useParams} from "react-router-dom";

const CancelOrderWidget = React.lazy(() => import("cancelOrder/CancelOrderWidget"));

type UrlParams = {
    orderId: string;
}

export const CancelOrderPage: FC = () => {
    const { orderId } = useParams<UrlParams>();

    return (
        <Suspense fallback={<div/>}>
            <CancelOrderWidget
                orderId={orderId ?? ""}/>
        </Suspense>
    );
}
