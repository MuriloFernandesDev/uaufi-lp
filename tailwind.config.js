module.exports = {
   important: true,
   content: [
      './src/**/*.{js,ts,jsx,tsx}',
      'node_modules/daisyui/dist/**/*.js',
      'node_modules/react-daisyui/dist/**/*.js',
   ],
   theme: {
      fontSize: {
         xs: '0.75rem',
         sm: '0.875rem',
         base: '1rem',
         lg: '1.125rem',
         xl: '1.25rem',
         '2xl': '1.5rem',
         '3xl': '1.875rem',
         '4xl': '2.25rem',
         '5xl': '3rem',
         '6xl': '4rem',
      },
      extend: {},
   },
   daisyui: {
      themes: [
         {
            light: {
               'base-100': '#fafafa',
               primary: '#03A9F4',
               '.btn-primary': {
                  color: '#fff',
               },
            },
         },
      ],
   },
   plugins: [require('daisyui')],
};
