import type {Config} from 'tailwindcss'
import {sizes} from "./sizes";
import {extended} from './extended'
import {absolute} from "../plugins";
import {grid} from "../plugins/";
import {transition} from "../plugins";
import {dev} from "../plugins";
import {scrollbar} from '../plugins'

export const full = {
    content: [],
    presets: [extended, sizes], // Order somehow matters
    plugins: [absolute, grid, transition, dev, scrollbar],
    corePlugins: {
        preflight: false,
        transitionProperty: false
    }
} satisfies Config