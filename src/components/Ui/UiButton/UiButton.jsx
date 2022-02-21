import cn from 'classnames';

import '../index.css';
import styles from './UiButton.module.css';

const UiButton = ({
    text,
    onClick,
    disabled,
    theme='dark',
    classes
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={cn(styles.button, styles[theme], classes)}
        >
            {text}
        </button>
    )
}


export default UiButton;