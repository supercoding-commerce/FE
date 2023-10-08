export type Message = {
  sender: string;
  content: string;
};

export type UserInfo = {
  userId: number;
  userName: string;
};

export type ProductInfo = {
  productId: number;
  productName: string;
};

export type SellerInfo = {
  sellerId: number;
  shopName: string;
};

export type ReceivedMessage = {
  type: string;
  shopName: string;
  userName: string;
  role: string;
  customRoomId: string;
  content?: string;
  sender?: string;
};
