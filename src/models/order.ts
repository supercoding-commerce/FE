type Order = {
  orderId: number;
  productId: number;
  price: number;
  productName: string;
  imageUrl: string;
  cartId?: number;
  orderState: '결제대기' | '결제완료';
  quantity: number;
  totalPrice: number;
  options: string;
  createdAt: string;
};
