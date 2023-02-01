// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './SuggestedAccounts.module.scss';
import Wrapper from '~/components/Popper/Wrapper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <Wrapper>
                    <div className={cx('preview')}>
                        <AccountPreview />
                    </div>
                </Wrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy offset={[-20, 0]} interactive delay={[800, 0]} render={renderPreview} placement="bottom">
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7190357733610029062~c5_100x100.jpeg?x-expires=1674306000&x-signature=uwdL4vO3SzD2SbrBbSA5e9Q9wAE%3D"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>ValneCuong</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Lê Văn Cường</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
