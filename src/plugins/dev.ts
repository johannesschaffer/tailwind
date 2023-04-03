// Helper classes I often need during dev

import plugin from "tailwindcss/plugin"

export const dev = plugin(({addComponents}) => {
    addComponents({
        '.red': {'background': 'red'}
    })
})