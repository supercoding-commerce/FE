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

type OrderList = {
  orderId: number;
  isReviewed: boolean;
  orderOption: string;
}[];

type reviewProps = {
  productId: number;
  isReview: boolean;
  orderList: OrderList;
};

const Review = ({ productId, isReview, orderList }: reviewProps) => {
  const [review, setReview] = useState<DetailReview[]>([]);
  const [isWrite, setIsWrite] = useState<boolean>(false);
  const [filterOrderLists, setFilterOrderLists] = useState<OrderList>([]);
  // const [possibleOrderId, setPossibleOrderId] = useState<OrderList>([]);

  const filterOrderList = () => {
    const filter = orderList.filter((orderList) => !orderList.isReviewed);
    setFilterOrderLists([...filter]);
  };

  useEffect(() => {
    filterOrderList();
  }, [orderList]);

  const orderId = filterOrderLists.map((item) => JSON.stringify(item.orderId));

  const combineOrderIdAndOption = (item: { orderId: number; orderOption: string }) =>
    `${item.orderId}-${JSON.parse(item.orderOption)[0]}`;

  const stringOrderList = filterOrderLists.map(combineOrderIdAndOption);

  console.log('orderList', orderList);
  console.log('filterOrderLists', filterOrderLists);

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

  /** 최신순 재배열 */
  const byLatest = () => {
    const sortedReviews = review.sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return dateB - dateA;
    });
    setReview([...sortedReviews]);
  };

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
      <ReviewFilterButton byRating={byRating} byLatest={byLatest} />
      {review?.map((item, idx) => {
        return <ReviewBox key={idx} review={item} />;
      })}
    </>
  );
};

export default Review;
