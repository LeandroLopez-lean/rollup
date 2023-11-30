import html from '@rollup/plugin-html';
import copy from 'rollup-plugin-copy';
import css from 'rollup-plugin-css-only';
import image from '@rollup/plugin-image';

export default {
    input: "src/index.js",
    ouput: {
        file: 'dist/bundle.js',
        format: 'es',
        soucemap: true,
    },
    Plugins: [
        copy({
            targets: [
                {
                    src: "src/assets/**/*",
                    dest: "dist/assets"
                }
            ]
        }),
        css({
            output: 'bundle.css'
        }),
        html(),
        image(),
    ]
}