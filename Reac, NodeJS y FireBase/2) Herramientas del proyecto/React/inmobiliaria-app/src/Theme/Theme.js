import { createTheme } from '@mui/material/styles'

const Theme = createTheme({
    typography : {
        useNextVariants: true
    },
    palette: {
        primary: {
            main: '#F6D167'
        },
        common: {
            white : 'white'
        },
        secondary : {
            main : '#297F87'
        }
    },
    spacing : 10
});
export default Theme