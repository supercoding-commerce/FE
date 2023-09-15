import { HTMLInputTypeAttribute, MouseEvent, useState } from 'react';
import DaumPostCode, { Address } from 'react-daum-postcode';
import { useNavigate } from 'react-router-dom';

import { checkEmail, checkNickName, checkShopName, signUpBuyer, signUpSeller } from '@/apis/user';
import Button from '@/components/common/Button/Button';
import { Input } from '@/components/common/Input/Input';
import Modal from '@/components/common/Modal/Modal';
import { Radio } from '@/components/common/Radio/Radio';
import { RadioGroup } from '@/components/common/Radio/RadioGroup';
import TextField from '@/components/common/TextField/TextField';
import { ImageUploader } from '@/components/ImageUploader/ImageUploader';
import * as S from '@/components/signup/SignUpForm/SignUpForm.styles';
import useInputs from '@/hooks/useInputs';
import { theme } from '@/styles/theme';
import {
  validateEmail,
  validateEmpty,
  validatePassword,
  validatePasswordConfirm,
  validateTelePhone,
} from '@/utils/validate';

interface SignUpFormProps {
  pathname: string;
}

export interface SignUpItem {
  email: string;
  password: string;
  passwordConfirm: string;
  userName: string;
  address: string;
  detailAddress: string;
  telephone: string;
  gender: 'FEMALE' | 'MALE';
  age: string;
  nickName: string;
  shopName: string;
  file: File | null;
}

interface InputItem {
  labelId: string;
  label: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  button?: () => void;
  value: string;
}

const SignUpForm = ({ pathname }: SignUpFormProps) => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [image, setImage] = useState<File[]>([]);

  const { form, onChange, onChangeForm } = useInputs<SignUpItem>({
    email: '',
    passwordConfirm: '',
    password: '',
    userName: '',
    telephone: '',
    gender: 'FEMALE',
    address: '',
    age: '',
    nickName: '',
    detailAddress: '',
    shopName: '',
    file: null,
  });

  const handleCheckEmail = () => {
    // TODO-YD : 백엔드 api 다시 사용가능할 때 수정 예정
    // checkEmail(form.email).then((result) => {
    //   if (result.status === 200) {
    //     console.log(result);
    //   }
    //   if (result.status === 409) {
    //   }
    // });
  };

  const handleCheckNickName = () => {
    // TODO-YD : 백엔드 api 다시 사용가능할 때 수정 예정
    // checkNickName(form.nickName).then((result) => {
    //   if (result.status === 200) {
    //     console.log(result);
    //   }
    //   if (result.status === 409) {
    //   }
    // });
  };

  const handleCheckShopName = () => {
    // TODO-YD : 백엔드 api 다시 사용가능할 때 수정 예정
    // checkShopName(form.shopName).then((result) => {
    //   if (result.status === 200) {
    //     console.log(result);
    //   }
    //   if (result.status === 409) {
    //   }
    // });
  };

  const commonInputs: InputItem[] = [
    {
      labelId: 'email',
      label: 'ID',
      placeholder: '아이디를 입력해주세요',
      type: 'email',
      button: handleCheckEmail,
      value: form.email,
    },
    {
      labelId: 'password',
      label: 'PW',
      placeholder: '패스워드를 입력해주세요',
      type: 'password',
      value: form.password,
    },
    {
      labelId: 'passwordConfirm',
      label: 'PW 확인',
      placeholder: '패스워드를 한번 더 입력해주세요',
      type: 'password',
      value: form.passwordConfirm,
    },
    {
      labelId: 'userName',
      label: '이름',
      placeholder: '이름을 입력해주세요',
      type: 'text',
      value: form.userName,
    },
    {
      labelId: 'telephone',
      label: '전화번호',
      placeholder: '전화번호를 입력해주세요 ( "-" 빼고 )',
      type: 'text',
      value: form.telephone,
    },
  ];

  const buyerInputs: InputItem[] = [
    {
      labelId: 'nickName',
      label: '닉네임',
      placeholder: '닉네임을 입력해주세요',
      type: 'text',
      button: handleCheckNickName,
      value: form.nickName,
    },
    {
      labelId: 'age',
      label: '나이',
      placeholder: '숫자만 입력해주세요',
      type: 'number',
      value: form.age,
    },
  ];

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (pathname === '/signup/buyer') {
      signUpBuyer({
        email: form.email,
        password: form.password,
        userName: form.userName,
        telephone: form.telephone,
        gender: form.gender,
        address: form.address,
        age: form.age,
        nickName: form.nickName,
        // TODO-YD : 현재 api에 detail주소가 없어서 주석처리했습니다. api 수정되면 주석해제 해야함.
        // detailAddress: form.detailAddress,
      }).then((result) => {
        if (result.status === 200) {
          alert('회원가입이 완료되었습니다.');
          navigate('/signin');
          return;
        }

        alert('회원가입 실패');
        console.log(result);
        return;
      });
    }

    if (pathname === '/signup/seller') {
      const registerSellerDto = JSON.stringify({
        email: form.email,
        password: form.password,
        userName: form.userName,
        telephone: form.telephone,
        address: form.address,
        shopName: form.shopName,
        // TODO-YD : 현재 api에 detail주소가 없어서 주석처리했습니다. api 수정되면 주석해제 해야함.
        // detailAddress: form.detailAddress,
      });

      const formData = new FormData();
      formData.append('registerSellerDto', registerSellerDto);
      formData.append('multipartFile', image[0] || null);

      signUpSeller(formData).then((result) => {
        if (result.status === 200) {
          alert('회원가입이 완료되었습니다.');
          navigate('/signin');
          return;
        }

        alert('회원가입 실패');
        console.log(result);
        return;
      });
    }
  };

  const commonInputsValidate =
    validateEmail(form.email) &&
    validatePassword(form.password) &&
    validatePasswordConfirm(form.password, form.passwordConfirm) &&
    validateEmpty(form.userName) &&
    validateTelePhone(form.telephone) &&
    validateEmpty(form.address) &&
    validateEmpty(form.detailAddress);

  const buyerInputsValidate = validateEmpty(form.nickName) && validateEmpty(form.age);

  const sellerInputsValidate = validateEmpty(form.shopName);

  const buyerValidate = commonInputsValidate && buyerInputsValidate;

  const sellerValidate = commonInputsValidate && sellerInputsValidate;

  const handleDaumPostCode = (data: Address) => {
    const { address, zonecode } = data;
    onChangeForm('address', `${zonecode} ${address}`);
    setModalOpen(false);
  };

  return (
    <>
      {modalOpen ? (
        <Modal setModalOpen={setModalOpen}>
          <DaumPostCode onComplete={handleDaumPostCode} />
        </Modal>
      ) : null}
      <S.SignUpFormContainer onSubmit={submitHandler}>
        {commonInputs.map((item) => {
          return (
            <TextField labelId={item.labelId} label={item.label} key={item.label}>
              <Input
                variant="underline"
                isFullWidth
                placeholder={item.placeholder}
                id={item.labelId}
                type={item.type}
                name={item.labelId}
                onChange={onChange}
              />
              {item.button && (
                <Button
                  size="small"
                  height={'25px'}
                  width={'90px'}
                  variant="main"
                  onClick={item.button}
                >
                  중복검사
                </Button>
              )}
            </TextField>
          );
        })}
        {pathname === '/signup/buyer' ? (
          <>
            {buyerInputs.map((item) => {
              return (
                <TextField labelId={item.labelId} label={item.label} key={item.label}>
                  <Input
                    variant="underline"
                    isFullWidth
                    placeholder={item.placeholder}
                    id={item.labelId}
                    type={item.type}
                    name={item.labelId}
                    onChange={onChange}
                  />
                  {item.button && (
                    <Button
                      size="small"
                      height={'25px'}
                      width={'90px'}
                      variant="main"
                      onClick={item.button}
                    >
                      중복검사
                    </Button>
                  )}
                </TextField>
              );
            })}
            <TextField label="배송지" labelId="address">
              <Input
                variant="underline"
                isFullWidth
                placeholder={'배송지를 추가해주세요'}
                id="address"
                type="text"
                name="address"
                value={form.address}
                readOnly
              />
              <Button
                size="xsmall"
                color={theme.color.blue}
                height={'25px'}
                width={'80px'}
                variant="contained"
                onClick={(e: MouseEvent<HTMLButtonElement>) => {
                  e.preventDefault();
                  setModalOpen(!modalOpen);
                }}
              >
                주소검색
              </Button>
            </TextField>
            <Input
              variant="underline"
              isFullWidth
              placeholder="상세주소를 입력해주세요"
              id="detailAddress"
              type="text"
              name="detailAddress"
              value={form.detailAddress}
              onChange={onChange}
            />
            <TextField labelId="gender" label="성별">
              <RadioGroup>
                <Radio
                  isCircle
                  label="여자"
                  labelId="female"
                  name="gender"
                  value="FEMALE"
                  checked={form.gender === 'FEMALE'}
                  onChange={onChange}
                />
                <Radio
                  isCircle
                  label="남자"
                  labelId="male"
                  name="gender"
                  value="MALE"
                  checked={form.gender === 'MALE'}
                  onChange={onChange}
                />
              </RadioGroup>
            </TextField>
          </>
        ) : (
          <>
            <TextField labelId={'shopName'} label={'쇼핑몰 이름'} key={'쇼핑몰 이름'}>
              <Input
                variant="underline"
                isFullWidth
                placeholder={'쇼핑몰 이름을 입력해주세요'}
                id={'shopName'}
                type={'text'}
                name={'shopName'}
                onChange={onChange}
              />
              <Button
                size="small"
                height={'25px'}
                width={'90px'}
                variant="main"
                onClick={handleCheckShopName}
              >
                중복검사
              </Button>
            </TextField>
            <TextField label="쇼핑몰 주소" labelId="address">
              <Input
                variant="underline"
                isFullWidth
                placeholder={'쇼핑몰 주소를 추가해주세요'}
                id="address"
                type="text"
                name="address"
                value={form.address}
                readOnly
              />
              <Button
                size="xsmall"
                color={theme.color.blue}
                height={'25px'}
                width={'80px'}
                variant="contained"
                onClick={(e: MouseEvent<HTMLButtonElement>) => {
                  e.preventDefault();
                  setModalOpen(!modalOpen);
                }}
              >
                주소검색
              </Button>
            </TextField>
            <Input
              variant="underline"
              isFullWidth
              placeholder="상세주소를 입력해주세요"
              id="detailAddress"
              type="text"
              name="detailAddress"
              value={form.detailAddress}
              onChange={onChange}
            />
            <TextField labelId={'images'} label={'이미지'} size={'small'}>
              <ImageUploader images={image} setImages={setImage} />
            </TextField>
          </>
        )}
        <Button
          size="large"
          variant="contained"
          backgroundColor={theme.color.brand}
          height={'64px'}
          isFullWidth
          type="submit"
          disabled={pathname === '/signup/buyer' ? !buyerValidate : !sellerValidate}
        >
          회원가입
        </Button>
      </S.SignUpFormContainer>
    </>
  );
};

export default SignUpForm;
