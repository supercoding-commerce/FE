import { useEffect, useState } from 'react';

import ReviewBox from '@/components/Detail/detailReview/ReviewBox';
import ReviewButton from '@/components/Detail/detailReview/ReviewButton';
import ReviewFilterButton from '@/components/Detail/detailReview/ReviewFilterButton';
import ReviewWrite from '@/components/Detail/detailReview/ReviewWrite';
import { useGetReview } from '@/queries/review/query';

export type DetailReview = {
  productId: number;
  productName?: string;
  options?: string;
  reviewId?: number;
  author?: string;
  title: string;
  content: string;
  starPoint: number;
  imageUrl?: string;
  createdAt?: string;
};

type OrderList = {
  orderId: number;
  isReviewed: boolean;
  orderOption: string;
}[];

type reviewProps = {
  productId: number;
  orderList: OrderList;
};

export type Filter = '별점순' | '최신순';

const Review = ({ productId, orderList }: reviewProps) => {
  const [isWrite, setIsWrite] = useState<boolean>(false);
  const [filterOrderLists, setFilterOrderLists] = useState<OrderList>([]);

  // rating, latest
  const [filter, setFilter] = useState<'별점' | '최신순'>('별점');

  /** 별점순 재배열 */
  const byRating = (data: DetailReview[]) => {
    const star = data?.sort((a, b) => b.starPoint - a.starPoint);
    return star;
  };

  /** 최신순 재배열 */
  const byLatest = (data: DetailReview[]) => {
    const sortedReviews = data?.sort((a, b) => {
      if (!a.createdAt || !b.createdAt) return 0;
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return dateB - dateA;
    });
    return sortedReviews;
  };

  /**  react-query data 불러오기 */
  const { data: reviewList } = useGetReview(productId, {
    // select : reactQuery에서 서버에서 가져온 데이터를 변형하고 선택적 가공 가능.
    select: (data) => {
      return filter === '별점' ? byRating(data) || [] : byLatest(data) || [];
    },
  });

  /** filterOrderList() : 이미 작성했던 오더리스트 제외 필터링 */
  const filterOrderList = () => {
    const filter = orderList.filter((orderList) => !orderList.isReviewed);
    setFilterOrderLists(filter);
  };

  useEffect(() => {
    filterOrderList();
  }, [orderList]);

  // 리뷰작성창에 'orderId-옵션내용' 형태로 보내기
  const orderId = filterOrderLists.map((item) => JSON.stringify(item.orderId));

  const combineOrderIdAndOption = (item: { orderId: number; orderOption: string }) =>
    `${item.orderId}-${JSON.parse(item.orderOption)[0]}`;

  const stringOrderList = filterOrderLists.map(combineOrderIdAndOption);

  const handleWriteButton = () => {
    setIsWrite((prev) => !prev);
  };

  if (!reviewList) return null;
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
      <ReviewFilterButton filter={filter} onChangeFilter={setFilter} />
      {reviewList.map((item, idx) => {
        return <ReviewBox key={idx} review={item} />;
      })}
    </>
  );
};

export default Review;
