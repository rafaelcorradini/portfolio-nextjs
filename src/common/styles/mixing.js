const spaceValues = [0, 1, 2, 3, 4]

const spacing = (attribute, classPrefix) => ({ theme }) =>
  spaceValues.reduce(
    (accumulator, value) => `
    ${accumulator}

    .${classPrefix}-${value} {
      ${attribute}: ${theme.spacing(value)}px !important;
    }

    .${classPrefix}b-${value} {
      ${attribute}-bottom: ${theme.spacing(value)}px !important;
    }

    .${classPrefix}t-${value} {
      ${attribute}-top: ${theme.spacing(value)}px !important;
    }

    .${classPrefix}l-${value} {
      ${attribute}-left: ${theme.spacing(value)}px !important;
    }

    .${classPrefix}r-${value} {
      ${attribute}-right: ${theme.spacing(value)}px !important;
    }

    .${classPrefix}y-${value} {
      ${attribute}-top: ${theme.spacing(value)}px !important;
      ${attribute}-bottom: ${theme.spacing(value)}px !important;
    }

    .${classPrefix}x-${value} {
      ${attribute}-left: ${theme.spacing(value)}px !important;
      ${attribute}-right: ${theme.spacing(value)}px !important;
    }
  `,
    ''
  )

export { spacing }
