import { useEffect, useState } from 'react';

import { getReview } from '@/apis/review';
import ReviewBox from '@/components/Detail/detailReview/ReviewBox';
import ReviewButton from '@/components/Detail/detailReview/ReviewButton';
import ReviewFilterButton from '@/components/Detail/detailReview/ReviewFilterButton';
import ReviewWrite from '@/components/Detail/detailReview/ReviewWrite';

export type DetailReview = {
  productId: number;
  productName: string;
  options: string;
  reviewId: number;
  author: string;
  title: string;
  content: string;
  starPoint: number;
  imageUrl: string;
  createdAt: string;
};

type reviewProps = {
  productId: number;
  isReview: boolean;
  orderList: {
    orderId: number;
    orderOption: string;
  }[];
};

const Review = ({ productId, isReview, orderList }: reviewProps) => {
  const [review, setReview] = useState<DetailReview[]>([]);
  const [isWrite, setIsWrite] = useState<boolean>(false);

  const orderId = orderList.map((item) => JSON.stringify(item.orderId));
  //   const orderOption = orderList.map((item) => JSON.parse(item.orderOption));
  const combineOrderIdAndOption = (item: { orderId: number; orderOption: string }) =>
    `${item.orderId}-${JSON.parse(item.orderOption)[0]}`;

  const stringOrderList = orderList.map(combineOrderIdAndOption);

  useEffect(() => {
    if (isReview) {
      getReview(productId).then((result) => {
        if (result.status === 200) {
          const data = result.data;
          setReview(data);
        }
      });
    }
  }, [isReview, productId]);

  const handleWriteButton = () => {
    setIsWrite((prev) => !prev);
  };

  /** 별점 순 재배열 */
  const byRating = () => {
    const star = review.sort((a, b) => b.starPoint - a.starPoint);
    setReview([...star]);
  };

  /** TODO: 최신순 재배열 */
  //   const byLatest = () => {
  //   };

  return (
    <>
      <ReviewButton handleWriteButton={handleWriteButton} />
      {isWrite && (
        <ReviewWrite
          orderId={orderId}
          stringOrderList={stringOrderList}
          productId={productId}
          handleWriteButton={handleWriteButton}
        />
      )}
      <ReviewFilterButton byRating={byRating} />
      {review?.map((item, idx) => {
        return <ReviewBox key={idx} review={item} />;
      })}
    </>
  );
};

export default Review;
