import plugin from "tailwindcss/plugin"

export const grid = plugin(({matchComponents, addComponents, theme}) => {
    addComponents({
        '.row': {
            'display': 'grid',
            'grid-auto-flow': 'row',
            'justify-content': 'center',
            'align-items': 'center'
        },
        '.col': {
            'display': 'grid',
            'grid-auto-flow': 'column',
            'justify-content': 'center',
            'align-items': 'center'
        },
    })
    // 1. certain (preferred) size, 2. break into new rows until all items are below each other, 3. from there on shrink (e.g. if even a single element doesn't fit the mobile screen)
    // minmax(0px) => 0px is important, not 0
    matchComponents(
        {'grid-pref-size-break-shrink': value => ({
                'grid-template-columns': `repeat(auto-fit, minmax(clamp(0px, ${value}, 100%), min-content))`
            })},
        {values: theme('spacing')}
    )
    // https://css-tricks.com/an-auto-filling-css-grid-with-max-columns/
    // 1. max number of elements per row (3) & grow/shrink,
    // 2. min cell width -> then will break into new rows,
    // 3. from there on shrink (e.g. if even a single element doesn't fit the mobile screen)
    // params: maxColumns, minWidth (without px), gap (without px)
    matchComponents(
        {'grid-max-cols-min-cell-width': value => {
            const [maxColumns, minWidth, gap] = value.split(' ').map(it => Number(it))
            const gapCount = maxColumns - 1
            const totalGapWith = gapCount * gap
            const gridItemMaxWidth = `calc((100% - ${totalGapWith}px) / ${maxColumns})`
            
            // TODO: "auto-fit" should be "auto-fill"
            const tmp = `minmax(max(${minWidth}px, ${gridItemMaxWidth}), 1fr)`
            return {
                'grid-template-columns': `repeat(auto-fit, ${tmp})`,
                'gap': gap.toString()+'px'
            }
        }}
    )
})
