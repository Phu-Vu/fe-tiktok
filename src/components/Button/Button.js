import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Button({to, href, rounded = false, disabled = false, text = false, primary = false, outline = false, small = false, large = false, children, onClick, className, leftIcon, rightIcon, ...passProps}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    // if(disabled){
    //     delete props.onClick;
    // }

    if(disabled){
        Object.keys(props).forEach(key => {
            if(key.startsWith('on') && typeof props[key] === 'function'){
                delete props[key];
            }
        })
    }

    if(to) {
        props.to = to;
        Comp = Link
    }else if(href) {
        props.href = href;
        Comp = 'a'
    }

    const classes = cx('wrapper', {
        // primary: primary
        // thêm class primary cho css
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded,
        [className]: className,
        // thêm giá trị của className

    });
    return (
        <Comp className = {classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string, 
    href: PropTypes.string, 
    rounded: PropTypes.bool, 
    disabled: PropTypes.bool, 
    text: PropTypes.bool, 
    primary: PropTypes.bool, 
    outline: PropTypes.bool, 
    small: PropTypes.bool, 
    large: PropTypes.bool,
    children: PropTypes.node.isRequired, 
    onClick: PropTypes.func, 
    className: PropTypes.string, 
    leftIcon: PropTypes.node, 
    rightIcon: PropTypes.node,
}
export default Button;