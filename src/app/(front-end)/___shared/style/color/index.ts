const COLOR = {
  black: '#212121',
  white: '#ffffff',
  blue: '#0096FF',
  red: '#F42C04',
  green: '#7DD181',
  grey: {
    e4e4e4: '#e4e4e4',
    707070: '#707070',
  },
}

export default COLOR

export const getOpacity = (color: string, opacity: number) => {
  return color + Math.floor(opacity).toString(16)
}
