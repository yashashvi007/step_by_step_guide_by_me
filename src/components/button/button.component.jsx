// build the Button component from scratch as you are already familiar with this BUtton compnent so this time no solution and import './button.styles.scss';
import './button.styles.scss';
const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
};

const Button = ({ children, buttonType, ...otherProps }) => {
    return (
        <button
            className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;