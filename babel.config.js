module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-env': {
          modules: false
        }
      }
    ]
  ],
  plugins: [['styled-components', { ssr: true }], 'inline-react-svg']
}
