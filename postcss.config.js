module.exports = {
  plugins: [
    'tailwindcss',
    // process.env.NODE_ENV === 'production'
    //   ? [
    //       '@fullhuman/postcss-purgecss',
    //       {
    //         content: ['./pages/**/*.tsx', './pages/**/*.jsx', './pages/**/*.js']
    //       }
    //     ]
    //   : undefined,
    'postcss-preset-env'
  ]
};
