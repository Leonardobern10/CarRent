export const slideTopToDown = (yInitial: number, yAnimate: number) => ({
  initial: { y: yInitial },
  animate: { y: yAnimate },
  transition: {
    ease: "easeOut",
    duration: 1.5,
  },
});
