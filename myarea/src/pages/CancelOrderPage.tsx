import React, {FC} from "react";
import {useParams} from "react-router-dom";

const CancelOrderWidget = React.lazy(() => import("cancel-order/CancelOrderWidget"));

type UrlParams = {
    orderId: string;
}

export const CancelOrderPage: FC = () => {
    const { orderId } = useParams<UrlParams>();

    return (
        <React.Suspense fallback={<div/>}>
            <CancelOrderWidget
                orderId={orderId ?? ""}/>
        </React.Suspense>
    );
}
