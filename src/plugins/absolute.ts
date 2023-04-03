import plugin from "tailwindcss/plugin"

export const absolute = plugin(({matchUtilities, addUtilities, matchComponents, theme}) => {
    matchUtilities(
        // ? Has to be utility, otherwise will parse after tailwind utils -> position, inset & content have to come first
        // Often needed, since can't specify e.g. bottom without resetting top
        // content has to be set for some reason (I though e.g. "before" does it automatically)
        {abs: val => ({'position': 'absolute', 'content': "''", ...val})},
        {values: theme('abs')}
    )
    matchComponents(
        {'center': value => ({'position': 'absolute', ...value})},
        {values: theme('center')}
    )
    addUtilities({
        '.cont': {'content': "''"},
    })
}, {
    theme: {
        abs: {
            x: {'left': '0', 'right': '0'},
            y: {'top': '0', 'bottom': '0'},
            both: {'inset': '0'}
        },
        center: {
            x: {'left': '50%', 'transform': 'translateX(-50%)'},
            y: {'top': '50%', 'transform': 'translateY(-50%)'},
            both: {'left': '50%', 'top': '50%', 'transform': 'translate(-50%, -50%)'},
        }
    }
})