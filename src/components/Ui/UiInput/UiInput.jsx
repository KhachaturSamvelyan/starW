import cn from 'classnames';


import '../index.css';
import styles from './UiInput.module.css';

const UiInput = ({
    value,
    handleInputChange,
    placeholder,
    classes,
}) => (
    <div className={cn(styles.wrapper__input, classes)}>
        <input
            type="text"
            defaultValue={value}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder={placeholder}
            className={styles.input}
        />
        
    </div>
)



export default UiInput;