import { HTMLInputTypeAttribute, MouseEvent, useState } from 'react';
import DaumPostCode, { Address } from 'react-daum-postcode';
import { useNavigate } from 'react-router-dom';

import { checkEmail, checkNickName, checkShopName, signUpBuyer, signUpSeller } from '@/apis/user';
import AddressModal from '@/components/common/AddressModal/AddressModal';
import Button from '@/components/common/Button/Button';
import { Input } from '@/components/common/Input/Input';
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
  nickname: string;
  shopName: string;
  file: File | null;
}

interface InputItem {
  labelId: string;
  label: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  button?: (e: MouseEvent<HTMLButtonElement>) => void;
  value: string;
  disabled?: boolean;
  buttonText?: string;
}

const SignUpForm = ({ pathname }: SignUpFormProps) => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [image, setImage] = useState<File[]>([]);
  const [isChecked, setIsChecked] = useState({
    checkedEmail: false,
    checkedNickName: false,
    checkedShopName: false,
  });

  const { form, onChange, onChangeForm } = useInputs<SignUpItem>({
    email: '',
    passwordConfirm: '',
    password: '',
    userName: '',
    telephone: '',
    gender: 'FEMALE',
    address: '',
    age: '',
    nickname: '',
    detailAddress: '',
    shopName: '',
    file: null,
  });

  const handleCheckEmail = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    checkEmail(form.email)
      .then((result) => {
        if (result.status === 200) {
          setIsChecked({
            ...isChecked,
            checkedEmail: true,
          });
        }
      })
      .catch((result) => {
        if (result.response.status === 409) {
          alert(`${result.response.data.errorMessage}`);
        }
      });
  };

  const handleCheckNickName = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    checkNickName(form.nickname)
      .then((result) => {
        if (result.status === 200) {
          setIsChecked({
            ...isChecked,
            checkedNickName: true,
          });
        }
      })
      .catch((result) => {
        if (result.response.status === 409) {
          alert(`${result.response.data.errorMessage}`);
        }
      });
  };

  const handleCheckShopName = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    checkShopName(form.shopName)
      .then((result) => {
        if (result.status === 200) {
          setIsChecked({
            ...isChecked,
            checkedShopName: true,
          });
        }
      })
      .catch((result) => {
        if (result.response.status === 409) {
          alert(`${result.response.data.errorMessage}`);
        }
      });
  };

  const commonInputs: InputItem[] = [
    {
      labelId: 'email',
      label: 'ID',
      placeholder: '아이디를 입력해주세요',
      type: 'email',
      button: handleCheckEmail,
      value: form.email,
      disabled: validateEmail(form.email),
      buttonText: isChecked.checkedEmail ? 'v' : '중복검사',
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
      labelId: 'nickname',
      label: '닉네임',
      placeholder: '닉네임을 입력해주세요',
      type: 'text',
      button: handleCheckNickName,
      value: form.nickname,
      disabled: validateEmpty(form.nickname),
      buttonText: isChecked.checkedNickName ? 'v' : '중복검사',
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
        nickname: form.nickname,
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

  const buyerValidate =
    commonInputsValidate &&
    validateEmpty(form.nickname) &&
    validateEmpty(form.age) &&
    isChecked.checkedEmail &&
    isChecked.checkedNickName;

  const sellerValidate =
    commonInputsValidate &&
    validateEmpty(form.shopName) &&
    isChecked.checkedEmail &&
    isChecked.checkedShopName;

  const handleDaumPostCode = (data: Address) => {
    const { address, zonecode } = data;
    onChangeForm('address', `${zonecode} ${address}`);
    setModalOpen(false);
  };

  return (
    <>
      {modalOpen ? (
        <AddressModal setModalOpen={setModalOpen}>
          <DaumPostCode onComplete={handleDaumPostCode} />
        </AddressModal>
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
                  disabled={!item.disabled}
                >
                  {item.buttonText}
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
                      disabled={!item.disabled}
                    >
                      {item.buttonText}
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
                disabled={!validateEmpty(form.shopName)}
              >
                {isChecked.checkedShopName ? 'v' : '중복검사'}
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
