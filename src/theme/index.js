import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            light: '#B5FF7D',
            main: '#52D681',
            dark: '#00AD7C'
        },
        secondary: {
            light: '#DFDFDF',
            main: '#B0B0B0',
            dark: '#8C8C8C'
        }
    },
    // overrides: { TODO
    //     MuiTypography: {
    //         h1: {
    //             fontSize: "5rem"
    //         }
    //     }
    // }
});

export default theme;