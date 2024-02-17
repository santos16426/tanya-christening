export const boxMenuVariant = {
  open: {
    width: 430,
    height: 500,
    top: "-12.5px",
    right: "-12.5px",
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: 80,
    height: 30,
    top: "0px",
    right: "0px",
    transition: { duration: 0.7, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
  },
};

export const perspectiveVariant = {
  initial: {
    opacity: 0,
    rotateX: 90,
  },
  enter: (i: number) => ({
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.65,
      delay: 0.5 + i * 0.1,
      opacity: { duration: 0.35 },
    },
  }),
  exit: {
    opacity: 0,
  },
};
