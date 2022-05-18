import {ChangeEvent, FC, useState} from "react";
import {
    Button,
    Container,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    Typography
} from "@mui/material";

interface Props {
    orderId: number;
}

export const CancelOrderWidget: FC<Props> = ({ orderId }) => {
    const [disable, setDisable] = useState<boolean>(true);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDisable(event.target.value === "no");
    };

    return <Container sx={{my: 3}}>
        <Typography variant="h3" color="text.primary">
            {`Do you really want to cancel order ${orderId}?`}
        </Typography>
        <FormControl sx={{my: 3}}>
            <RadioGroup defaultValue={"no"} onChange={handleChange}>
                <FormControlLabel value="yes" control={<Radio/>} label="Yes"/>
                <FormControlLabel value="no" control={<Radio/>} label="No"/>
            </RadioGroup>
            <Button sx={{my : 2}} disabled={disable} size="small" variant={'contained'} onClick={() => alert("Order cancelled")} color={'error'}>Proceed</Button>
        </FormControl>
    </Container>;
}

