import type {Config} from 'tailwindcss'

export const extended = {
    content: [],
    theme: {
        extend: {
            transitionDuration: {
                '250': '250ms',
                '350': '350ms',
                '400': '400ms',
                '450': '450ms',
            },
            screens: {
                'smmax': {'max': '639px'},
                'mdmax': {'max': '767px'},
                'lgmax': {'max': '1023px'},
                'xlmax': {'max': '1279px'},
                '2xlmax': {'max': '1535px'},
            }
        }
    }
} satisfies Config