import plugin from "tailwindcss/plugin"

export const transition = plugin(({matchComponents, theme}) => {
    matchComponents(
        {'transition': value => ({'transition-property': value})},
        {values: theme('transition')}
    )
}, {
    theme: {
        transition: {
            'all': 'all',
            'opacity': 'opacity',
            'shadow': 'box-shadow',
            'color': 'color',
            'bg': 'background-color',
            'height': 'height',
            'width': 'width',
        }
    }
})