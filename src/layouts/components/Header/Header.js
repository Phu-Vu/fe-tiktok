import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import Button from '~/components/Button'
import Menu from '~/components/Popper/Menu'
import Image from '~/components/Image';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Search from '../Search';

import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faCoins, faEarthAsia, faEllipsisVertical, faKeyboard, faSignIn, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '@vuphu',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Get coins',
        to: '/coin'
    }, {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
]

function Header() {

    const currentUser = true;

    const handleMenuChange = (menuItem) => {

    }

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <Link className={cx('logo-link')} to={config.routes.home}>
                <img src={images.logo} alt="TikTok" />
            </Link>

            <Search />

            <div className={cx('action')}>
                {currentUser ? (
                    <>
                        <Tippy delay={[0, 200]} content="Upload video" placement='bottom'>
                            <button className={cx('action-btn')}>
                                {/* <FontAwesomeIcon icon={faCloudUpload} /> */}
                                <UploadIcon />
                            </button>
                            {/* <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faMessage} />
                            </button> */}
                        </Tippy>

                        <Tippy delay={[0, 50]} content="Message" placement="bottom">
                            <button className={cx('action-btn')}>
                                <MessageIcon />
                            </button>
                        </Tippy>

                        <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                            <button className={cx('action-btn')}>
                                <InboxIcon />
                                <span className={cx('badge')}>12</span>
                            </button>
                        </Tippy>
                    </>
                ) : (
                    <>
                        <Button text>Upload</Button>
                        <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                            Log in
                        </Button>
                    </>
                )}
                <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                    {currentUser ? (
                        <Image src='https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/9d00e94ec379c1168542e3e61bfabb8f.jpeg?x-expires=1680454800&x-signature=vkFT65d5cse%2BIAjTq1RZPqG2uUQ%3D'
                            className={cx('user-avatar')} alt='Vu Trong Phu'
                        // fallBack=''
                        />
                    ) : (

                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    )}
                </Menu>
            </div>
        </div>
    </header >
}

export default Header;