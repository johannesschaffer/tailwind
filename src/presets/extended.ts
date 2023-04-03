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
                'lgmax': {'max': '1023px'},
                'xlmax': {'max': '1279px'}
            }
        }
    }
} satisfies Config