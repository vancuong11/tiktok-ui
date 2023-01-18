import Buttons from '~/components/Buttons';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return (
        <Buttons className={cx('menu-item')} leftIcon={data.icon} to={data.to}>
            {data.title}
        </Buttons>
    );
}

export default MenuItem;
