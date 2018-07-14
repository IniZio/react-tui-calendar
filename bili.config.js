module.exports = {
  moduleName: 'TuiCalendar',
  format: ['cjs', 'cjs-min', 'umd', 'umd-min', 'es', 'es-min', 'iife', 'iife-min'],
  inline: false,
  external: ['react', 'tui-calendar'],
  globals: {
    'react': 'React',
    'tui-calendar': 'tui.Calendar'
  }
}
