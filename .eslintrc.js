module.exports = {
    'env': {
        'commonjs': true,
        'es2021': true,
        'node': true,
        'jest': true
    },
    'extends': 'eslint:recommended',
    'overrides': [
    ],
    'parserOptions': {
        'ecmaVersion': 'latest'
    },
    'rules': {
        'eqeqeq': 'error',
        'object-curly-spacing': [
            'error', 'always'
        ],
        'no-trailing-spaces': 'error',
        'arrow-spacing': [
            'error', { 'before': true, 'after': true }
        ],
        'no-console': 0,
        'indent': [
            'error',
            4,
        ],
        'linebreak-style': [
            'error',
            'windows'
        ],
        'semi': [
            'error',
            'never'
        ]
    }
}
