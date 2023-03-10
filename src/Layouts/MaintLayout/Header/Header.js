import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';

import config from '~/config';
import images from '~/assets/images';
import styles from './Header.module.scss';
import Button from '~/components/Button/Button';
import Menu from '~/components/Popper/Menu/Menu';
import 'tippy.js/dist/tippy.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image/Image';
import Search from './Search/Search';
import { Link } from 'react-router-dom';

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
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
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

function Header() {
    // Start check user
    const currentUser = true;
    // End check user

    // handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // handle change to language
                break;

            default:
                break;
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View Profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Logout',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <div className={cx('logo')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="Tiktok"></img>
                    </Link>
                </div>

                {/* Search */}
                <Search />
                {/*Start check user */}
                <div className={cx('actions')}>
                    {currentUser ? (
                        // case User login
                        <>
                            <Tippy content="Upload video" placement="bottom" delay={200}>
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Tin nhắn" placement="bottom" delay={200}>
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Hộp thư" placement="bottom" delay={200}>
                                <button className={cx('action-btn')}>
                                    <div className={cx('notice-inbox')}>
                                        <InboxIcon className={cx('inbox-icon')}></InboxIcon>
                                        <div className={cx('count-inbox')}>10</div>
                                    </div>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            {/* case not login */}
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7190357733610029062~c5_100x100.jpeg?x-expires=1674306000&x-signature=uwdL4vO3SzD2SbrBbSA5e9Q9wAE%3D"
                                className={cx('user-avatar')}
                                alt="Nguyễn Văn A"
                                // fallback="https://avatars.githubusercontent.com/u/87743680?s=40&v=4"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
                {/*End check user */}
            </div>
        </header>
    );
}

export default Header;
