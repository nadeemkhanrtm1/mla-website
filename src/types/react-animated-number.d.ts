declare module 'react-animated-number' {
    import { Component } from 'react';

    interface AnimatedNumberProps {
        value: number;
        formatValue?: (value: number) => string;
        duration?: number;
        frameStyle?: (perc: number) => React.CSSProperties;
        stepPrecision?: number;
        style?: React.CSSProperties;
        className?: string;
        component?: string;
    }

    export default class AnimatedNumber extends Component<AnimatedNumberProps> { }
}
