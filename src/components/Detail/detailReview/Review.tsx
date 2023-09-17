import React, { useEffect, useState } from 'react';

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
};

const Review = ({ productId, isReview }: reviewProps) => {
  const [review, setReview] = useState<DetailReview[]>([]);

  console.log(review);

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

  /** 별점 순 재배열 */
  const byRating = () => {
    const star = review.sort((a, b) => b.starPoint - a.starPoint);
    console.log('작동?');
    setReview([...star]);
  };

  /** TODO: 최신순 재배열 */
  //   const byLatest = () => {
  //   };

  return (
    <>
      <ReviewButton />
      <ReviewWrite />
      <ReviewFilterButton byRating={byRating} />
      {review?.map((item, idx) => {
        return <ReviewBox key={idx} review={item} />;
      })}
    </>
  );
};

export default Review;
