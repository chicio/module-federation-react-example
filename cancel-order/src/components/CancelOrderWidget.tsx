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

export const CancelOrderWidget: FC = () => {
    const [disable, setDisable] = useState<Boolean>(true);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDisable(event.target.value === "no");
    };

    return <Container sx={{my: 3}}>
        <Typography variant="h3" color="text.primary">
            Do you really want to cancel your order?
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

