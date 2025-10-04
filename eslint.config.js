// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
    {
        type: 'lib',
        formatter: true,
        stylistic: {
            indent: 4,
            trailingComma: 'none',
            quotes: 'single',
        },
        ignores: ['*.yaml', 'dist/**', 'node_modules/**', 'src/db/migrations/**', '.github/**', '.claude/**'],
    },
    {
        rules: {
            'no-console': 'off',
        },
    },
)
