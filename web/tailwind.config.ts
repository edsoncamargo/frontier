/** @type {import('tailwindcss').Config} */

import colors from './src/variables/colors';
import images from './src/variables/images';
import patterns from './src/variables/patterns';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      backgroundImage: {
        ...patterns,
        ...images,
      },
      fontFamily: {
        body: ['Roboto', 'sans-serif'],
        faroest: ['Rye'],
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '0.3em',
      },
      extend: {
        textStroke: {
          sm: '1px',
          md: '2px',
          lg: '3px',
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const strokeColors = theme('colors');
      const definedStrokeColors = { ...strokeColors, ...colors };
      const newUtilities = Object.keys(definedStrokeColors).reduce(
        (acc, colorName) => {
          const color = strokeColors[colorName];

          if (typeof color === 'string') {
            acc[`.text-stroke-${colorName}`] = {
              '-webkit-text-stroke-color': color,
            };
          } else {
            Object.keys(color).forEach((shade) => {
              acc[`.text-stroke-${colorName}-${shade}`] = {
                '-webkit-text-stroke-color': color[shade],
              };
            });
          }

          return acc;
        },
        {}
      );

      newUtilities['.text-stroke-xs'] = { '-webkit-text-stroke-width': '.5px' };
      newUtilities['.text-stroke-sm'] = { '-webkit-text-stroke-width': '1px' };
      newUtilities['.text-stroke-md'] = { '-webkit-text-stroke-width': '2px' };
      newUtilities['.text-stroke-lg'] = { '-webkit-text-stroke-width': '3px' };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
