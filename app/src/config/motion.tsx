import { MotionConfig as FramerMotionConfig } from 'framer-motion';
import { ReactNode } from 'react';

export const MotionConfig = ({ children }: { children: ReactNode }) => {
    return <FramerMotionConfig reducedMotion="user">{children}</FramerMotionConfig>;
};
