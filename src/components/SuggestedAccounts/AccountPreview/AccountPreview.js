import classNames from "classnames/bind";
import styles from './AccountPreview.module.scss'
import Button from "~/components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img 
                className={cx('avatar')} 
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/7e9a4ea18f8eb9bd5d4cb8a99e3d7fc7~c5_100x100.jpeg?x-expires=1680796800&x-signature=ISFb5tOCuR4XtcfE9HwdSyxV2u4%3D" 
                alt="" />
                    <Button className={cx('follow-btn')} primary>Follow</Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>vuphu</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Vũ Trọng Phú</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;