import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames';

function Image({ src, alt, className, fallback: customFallBack = images.noImage, ...props }, ref) {
    // fallback: customFallBack = images.noImage
    // -> Đổi tên fallback => custom fallback
    // trong trường hợp không có fallback truyền từ ngoài vào thì sẽ lấy giá trị images.noImage
    // trong trường hợp có fallback truyền từ ngoài vào thì sẽ lấy giá trị fallback set cho useState
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallBack);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);
