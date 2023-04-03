import type {Config} from 'tailwindcss'

const sizesPx = {
    '0': '0px',
    '2': '2px',
    '5': '5px',
    '7': '7px',
    '10': '10px',
    '12': '12px',
    '15': '15px',
    '17': '17px',
    '20': '20px',
    '22': '22px',
    '25': '25px',
    '27': '27px',
    '30': '30px',
    '32': '32px',
    '35': '35px',
    '37': '37px',
    '40': '40px',
    '42': '42px',
    '45': '45px',
    '47': '47px',
    '50': '50px',
    '55': '55px',
    '60': '60px',
    '65': '65px',
    '70': '70px',
    '75': '75px',
    '80': '80px',
    '85': '85px',
    '90': '90px',
    '95': '95px',
    '100': '100px',
    '120': '120px',
    '125': '125px',
    '150': '150px',
    '175': '175px',
    '200': '200px',
    '250': '250px',
    '300': '300px',
    '350': '350px',
    '400': '400px',
    '450': '450px',
    '500': '500px',
}
const sizesPct = {
    '1/4': '25%',
    '1/2': '50%',
    '3/4': '75%',
}

export const sizes = {
    content: [],
    theme: {
        extend: {
            minWidth: sizesPx,
            minHeight: sizesPx,
        },
        
        spacing: sizesPx,
        borderRadius: {...sizesPx, ...sizesPct},
        backdropBlur: sizesPx,
        fontSize: sizesPx,
        blur: sizesPx
    }
} satisfies Config
