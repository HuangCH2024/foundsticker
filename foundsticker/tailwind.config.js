module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Yellow 色系
        yellow: {
          DEFAULT: '#FFEB3B',
          'lighten-5': '#FFFDE7',
          'lighten-4': '#FFF9C4',
          'lighten-3': '#FFF59D',
          'lighten-2': '#FFF176',
          'lighten-1': '#FFEE58',
          'darken-1': '#FDD835',
          'darken-2': '#FBC02D',
          'darken-3': '#F9A825',
          'darken-4': '#F57F17',
          'accent-1': '#FFFF8D',
          'accent-2': '#FFFF00',
          'accent-3': '#FFEA00',
          'accent-4': '#FFD600'
        },
        // Amber 色系
        amber: {
          DEFAULT: '#FFC107',
          'lighten-5': '#FFF8E1',
          'lighten-4': '#FFECB3',
          'lighten-3': '#FFE082',
          'lighten-2': '#FFD54F',
          'lighten-1': '#FFCA28',
          'darken-1': '#FFB300',
          'darken-2': '#FFA000',
          'darken-3': '#FF8F00',
          'darken-4': '#FF6F00',
          'accent-1': '#FFE57F',
          'accent-2': '#FFD740',
          'accent-3': '#FFC400',
          'accent-4': '#FFAB00'
        },
        // Orange 色系
        orange: {
          DEFAULT: '#FF9800',
          'lighten-5': '#FFF3E0',
          'lighten-4': '#FFE0B2',
          'lighten-3': '#FFCC80',
          'lighten-2': '#FFB74D',
          'lighten-1': '#FFA726',
          'darken-1': '#FB8C00',
          'darken-2': '#F57C00',
          'darken-3': '#EF6C00',
          'darken-4': '#E65100',
          'accent-1': '#FFD180',
          'accent-2': '#FFAB40',
          'accent-3': '#FF9100',
          'accent-4': '#FF6D00'
        },
        // Grey 色系
        grey: {
          DEFAULT: '#9E9E9E',
          'lighten-5': '#FAFAFA',
          'lighten-4': '#F5F5F5',
          'lighten-3': '#EEEEEE',
          'lighten-2': '#E0E0E0',
          'lighten-1': '#BDBDBD',
          'darken-1': '#757575',
          'darken-2': '#616161',
          'darken-3': '#424242',
          'darken-4': '#212121'
        },
        // Shades (黑白)
        black: '#000000',
        white: '#FFFFFF',
        // Custom 语义色
        custom: {
          primary: '#3F51B5',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107'
        }
      },
      // 透明度配置（对应 black 列的透明度）
      opacity: {
        '87': '0.87',
        '60': '0.60',
        '58': '0.58',
        '54': '0.54',
        '42': '0.42',
        '38': '0.38',
        '26': '0.26',
        '20': '0.20',
        '18': '0.18',
        '12': '0.12',
        '06': '0.06'
      },
      fontFamily: {
        rem: [
          'REM',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif'
        ],
        righteous: [
          'RIGHTEOUS',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif'
        ]
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900'
      },
      spacing: {
        '4': '4px',
        '8': '8px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '40': '40px',
        '48': '48px',
        '56': '56px',
        '64': '64px',
        '72': '72px',
        '80': '80px',
        '88': '88px',
        '96': '96px',
      },
      fontSize: {
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '20': '20px',
        '24': '24px',
        '28': '28px',
        '32': '32px',
        '36': '36px',
        '40': '40px',
        '44': '44px',
        '48': '48px',
        '52': '52px',
        '56': '56px',
        '60': '60px',
        '64': '64px',
        '68': '68px',
        '72': '72px',
        '76': '76px',
        '80': '80px',
        '84': '84px',
        '88': '88px',
        '92': '92px',
        '96': '96px',
      },
      borderRadius: {
        '4': '4px',
        '8': '8px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
