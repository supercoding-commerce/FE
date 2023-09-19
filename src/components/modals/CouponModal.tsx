import { useState } from 'react';
import NiceModal, { useModal } from '@ebay/nice-modal-react';

import Button from '@/components/common/Button/Button.tsx';
import { Modal } from '@/components/common/Modal/Modal';
import { CouponItem } from '@/components/CouponItem/CouponItem.tsx';
import { useGetCoupon } from '@/queries/coupon/query.ts';

type _CouponModalProps = {
  selectedCoupon: Coupon | undefined;
  onUseCoupon: (selectedCoupon: Coupon | undefined) => void;
};
function _CouponModal({ selectedCoupon, onUseCoupon }: _CouponModalProps) {
  const modal = useModal();
  const [localSelectedCoupon, setLocalSelectedCoupon] = useState<Coupon | undefined>(
    selectedCoupon,
  );

  const handleUseCoupon = async () => {
    onUseCoupon(localSelectedCoupon);
    setLocalSelectedCoupon(undefined);
    await modal.hide();
  };

  const handleClose = async () => {
    setLocalSelectedCoupon(undefined);
    await modal.hide();
  };

  const { data: coupons } = useGetCoupon();

  return (
    <Modal visible={modal.visible}>
      <Modal.Header onClose={handleClose} />
      <Modal.Content>
        {coupons?.length === 0 ? (
          <p>쿠폰이 존재하지 않습니다.</p>
        ) : (
          <>
            {coupons?.map((coupon, index) => (
              <CouponItem
                key={index}
                coupon={coupon}
                selectedCoupon={localSelectedCoupon}
                onSelectCoupon={() => setLocalSelectedCoupon(coupon)}
              />
            ))}
            <Button variant={'main'} size={'large'} onClick={handleUseCoupon}>
              쿠폰 사용
            </Button>
          </>
        )}
      </Modal.Content>
    </Modal>
  );
}
export const CouponModal = NiceModal.create(_CouponModal);
