export const slideHorizontal = (
  xInitial: number,
  xFinal: number,
  duration?: number | 1,
) => ({
  initial: { opacity: 0, x: xInitial },
  animate: { opacity: 1, x: xFinal },
  transition: { ease: "easeOut", duration: duration },
});

export const appearanceAnimation = (
  opacityInitial: number,
  opacityFinal: number,
  duration?: number | 1,
) => ({
  initial: { opacity: opacityInitial },
  animate: { opacity: opacityFinal },
  transition: { ease: "easeOut", duration: duration },
});

export const toExtendHorizontal = (
  initialX?: number | 0.7,
  initialY?: number | 1.2,
  duration?: number | 1.3,
) => ({
  initial: { scaleX: initialX, scaleY: initialY, opacity: 0 },
  whileInView: { scaleX: 1, scaleY: 1, opacity: 1 },
  transition: { ease: "backOut", duration: duration },
});
