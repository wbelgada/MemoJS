import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';

export default function TimeSlider({setTimeApp, timeFromApp, maxfromApp}) {
    const [time, setTime] = React.useState(timeFromApp);

    const handleChange = (event, newValue) => {
        setTime(newValue)
        setTimeApp(time)
    };

    return (
        <div>
            <h1 style={{color: "white"}}>{ timeFromApp }</h1>
            <Box sx={{ width: 200 }}>
                <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                    <Slider  min={0} max={maxfromApp} value={timeFromApp} onChange={handleChange} />
                </Stack>
            </Box>
        </div>
    );
}
