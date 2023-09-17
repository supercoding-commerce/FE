import { cx } from '@emotion/css';

import * as S from './CouponItem.styles.tsx';

type CouponItemProps = {
  coupon: Coupon;
  selectedCoupon: Coupon | undefined;
  onSelectCoupon: (selectedCoupon: Coupon) => void;
};
export function CouponItem({ coupon, selectedCoupon, onSelectCoupon }: CouponItemProps) {
  const expired = isExpired(coupon.expiredAt);

  const active = coupon.couponId === selectedCoupon?.couponId;
  return (
    <S.CouponItemWrapper
      className={cx({
        ['disabled']: expired,
        ['active']: active,
      })}
      onClick={() => onSelectCoupon(coupon)}
    >
      <S.CouponContent>{coupon.couponContent}</S.CouponContent>
      <S.CouponTitle>{coupon.couponTitle}</S.CouponTitle>
      <S.CouponExpired>{formatDate(coupon.expiredAt)}</S.CouponExpired>
    </S.CouponItemWrapper>
  );
}

const DAY = 1000 * 60 * 60 * 24;
function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  const expiredDay = Math.ceil((Date.now() - date.getTime()) / DAY);
  const expiredText = expiredDay < 0 ? `${Math.abs(expiredDay)}일 후 만료` : '만료';

  return `${expiredText} (${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()})`;
}

/**
 * @return boolean 만료되지 않았다면 false, 만료된것은 true
 */
function isExpired(dateStr: string) {
  const date = new Date(dateStr);
  const expiredDay = Math.ceil((Date.now() - date.getTime()) / DAY);
  return expiredDay >= 0;
}
