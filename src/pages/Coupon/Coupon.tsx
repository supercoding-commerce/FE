import { CouponItem } from '@/components/CouponItem/CouponItem';
import { useGetCoupon } from '@/queries/coupon/query';
import * as S from './Coupon.styles.tsx';

type Coupon = {
  couponContent: string;
  couponId: number;
  couponTitle: string;
  createdAt: string;
  expiredAt: string;
  isUsed: boolean;
  userId: number;
}[];

const Coupon = () => {
  const { data: coupons } = useGetCoupon();

  return (
    <S.Coupon>
      {coupons?.length === 0 ? (
        <p>쿠폰이 존재하지 않습니다.</p>
      ) : (
        <div className="coupon_container">
          {coupons?.map((coupon, index) => (
            <div className="coupon_wrapper">
              <CouponItem
                key={index}
                coupon={coupon}
                selectedCoupon={coupon}
                onSelectCoupon={() => coupon}
              />
            </div>
          ))}
        </div>
      )}
    </S.Coupon>
  );
};

export default Coupon;
