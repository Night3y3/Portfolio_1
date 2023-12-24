import React, { ReactNode } from 'react';
import { Variants, motion, HTMLMotionProps } from 'framer-motion';

interface InnerProps {
    children: ReactNode;
}

const Inner: React.FC<InnerProps> = ({ children }) => {

    const anim = (variants: Variants) => {
        return {
            initial: 'initial',
            animate: 'animate',
            exit: 'exit',
            variants,
        };
    };

    const opacity = {
        initial: { opacity: 0 },
        enter: {
            opacity: 1,
            transition: {
                duration: 2,
            }
        },
        exit: { opacity: 0 },
    }

    return <motion.div {...anim(opacity)}>{children}</motion.div>;
};

export default Inner;