import 'react-toastify/dist/ReactToastify.css';
import { ReactNode } from 'react';
import { toast, ToastContainer, ToastOptions } from 'react-toastify';
import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

type ToastifyOptions = {
  position:
    | 'top-right'
    | 'top-center'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-center'
    | 'bottom-left';
  autoClose: number;
  closeOnClick: boolean;
  hideProgressBar: boolean;
  icon?: ReactNode;
};

const defaultOption: ToastifyOptions = {
  position: 'bottom-center',
  autoClose: 1500,
  closeOnClick: true,
  hideProgressBar: true,
};

export const Toast = {
  success: (message: ReactNode, options: ToastOptions = {}) => {
    toast.success(message, {
      ...defaultOption,
      ...options,
      icon: options.icon || defaultOption.icon,
    });
  },
  error: (message: ReactNode, options: ToastOptions = {}) => {
    toast.error(message, {
      ...defaultOption,
      ...options,
      icon: options.icon || defaultOption.icon,
    });
  },
};

export const StyledToastContainer = styled(ToastContainer)`
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  .Toastify__toast {
    background-color: black;
    color: white;
  }
  .Toastify__toast--success {
    font: ${theme.font.body2};
  }
  .Toastify__toast--error {
    font: ${theme.font.body2};
  }
`;
