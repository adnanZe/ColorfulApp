import * as yup from 'yup';

function getRgbSchema(color: string) {
  return yup
    .number()
    .typeError(`${color} required`)
    .required(` ${color} required`)
    .moreThan(-1, 'Min nr. 0')
    .lessThan(256, 'Max nr. 255');
}

export const schema = yup.object({
  red: getRgbSchema('red'),
  green: getRgbSchema('green'),
  blue: getRgbSchema('blue'),
});