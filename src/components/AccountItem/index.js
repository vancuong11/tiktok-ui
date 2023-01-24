import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '~/components/Image';
const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/f0ddf05770a5b5a0b8a0d98fc17b27ee~c5_300x300.webp?x-expires=1673848800&x-signature=7Xy4%2FajDR8aCzfsdzklGiLDMnXw%3D"
                alt="Hoa"
            ></Image>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Tên người dùng</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Nguyễn Văn A</span>
            </div>
        </div>
    );
}

export default AccountItem;
