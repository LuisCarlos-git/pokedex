import { Variants } from 'framer-motion';

export const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.7
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      staggerChildren: 0.1,
      delayChildren: 0.4
    }
  }
};

export const searchbarVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.7
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      bounce: 0.4
    }
  }
};

export const buttonVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.7
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      delay: 1
    }
  }
};
