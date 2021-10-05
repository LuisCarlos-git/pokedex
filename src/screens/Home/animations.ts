import { Variants } from 'framer-motion';

export const cardVariants: Variants = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      delay: 0.4,
      delayChildren: 0.4,
      staggerChildren: 0.2
    }
  }
};

export const itemVariants: Variants = {
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
      duration: 0.5,
      delayChildren: 0.5
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
