import { Input } from '@/components/common/Input/Input';

function Test() {
  return (
    <>
      <Input type="text" isFullWidth error placeholder="상품 설명을 입력하세요." />
      <Input type="text" size="md" error placeholder="상품 설명을 입력하세요." />
      <Input
        type="text"
        size="sm"
        error
        placeholder="이름을 입력해주세요."
        variant="underline"
        errorMessage="에러 발생! 입력값이 유효하지 않습니다."
      />
      <Input type="text" size="md" placeholder="이름을 입력해주세요." variant="underline" />
      <Input type="text" size="md" placeholder="이름을 입력해주세요." />
      <Input
        type="text"
        size="sm"
        placeholder="상품 설명을 입력하세요."
        style={{ width: '350px', height: '45px' }}
      />
      <Input
        type="text"
        size="md"
        placeholder="상품 설명을 입력하세요."
        error
        errorMessage="에러 발생! 입력값이 유효하지 않습니다."
      />
    </>
  );
}

export default Test;
