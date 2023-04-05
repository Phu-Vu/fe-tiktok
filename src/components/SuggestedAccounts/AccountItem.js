import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import AccountPreview from './AccountPreview/AccountPreview';
import {Wrapper as PopperWrapper} from '~/components/Popper'

const cx = classNames.bind(styles);

function AccountItem() {

    const renderPreview = (props) => {
        return (
            <div tabIndex='-1' {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        )
    }

    return (
        
        <div>
            <Tippy
                interactive
                delay={[800, 0]}    // [ẩn, hiện]
                render={renderPreview}
                placement='bottom'
                offset={[-30, 0]}
            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/7e9a4ea18f8eb9bd5d4cb8a99e3d7fc7~c5_100x100.jpeg?x-expires=1680796800&x-signature=ISFb5tOCuR4XtcfE9HwdSyxV2u4%3D'
                        alt=''
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>vuphu</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Vũ Trọng Phú</p>
                    </div>
                </div>
            </Tippy>
        </div>

    );
}

AccountItem.propTypes = {

}

export default AccountItem;