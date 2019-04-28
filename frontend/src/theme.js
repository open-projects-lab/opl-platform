import {createMuiTheme} from '@material-ui/core';

export default createMuiTheme({
    typography: {
        fontFamily: [
            'Montserrat',
            'sans-serif'
        ].join(','),
        useNextVariants: true,
    },
    palette: {
        // type: 'dark',
        // Button:{
        //     color: 'white',
        // }
    },
});