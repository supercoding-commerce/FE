import Button from '@/components/common/Button/Button';

const BtnTest = () => {
  return (
    <div style={{ width: '100vw' }}>
      <Button
        variant="contained"
        backgroundColor="white"
        onClick={() => alert('클릭')}
        size="medium"
        width="150px"
        isCircle={false}
        isFullWidth={false}
        isDisabled
      >
        장바구니
      </Button>
      <Button
        variant="contained"
        onClick={() => alert('클릭')}
        size="large"
        backgroundColor="#55FE3A"
        isCircle={false}
        isFullWidth
        isDisabled
      >
        판매자로 가입
      </Button>
      <Button
        variant="contained"
        onClick={() => alert('클릭')}
        size="large"
        backgroundColor="#FEE608"
        isCircle={false}
        isFullWidth
        isDisabled
      >
        구매자로 가입
      </Button>
      <Button
        variant="main"
        onClick={() => alert('클릭')}
        size="medium"
        width="150px"
        color="#55FE3A"
        isCircle={false}
        isDisabled
      >
        구매하기
      </Button>
      <Button
        variant="main"
        onClick={() => alert('클릭')}
        size="small"
        width="76px"
        color="#55FE3A"
        isDisabled
      >
        내정보
      </Button>
      <Button
        variant="main"
        onClick={() => alert('클릭')}
        size="medium"
        width="120px"
        color="#55FE3A"
        isDisabled
      >
        내정보
      </Button>
      <Button
        variant="contained"
        onClick={() => alert('클릭')}
        size="small"
        isCircle={true}
        isFullWidth={false}
        isDisabled
        width="50px"
        height="50px"
      >
        상담
      </Button>
      <Button
        variant="outlined"
        onClick={() => alert('클릭')}
        size="medium"
        width="100px"
        color="#6A8DFF"
        isCircle={false}
        isFullWidth={false}
        isDisabled
      >
        파일선택
      </Button>
      <Button
        variant="outlined"
        onClick={() => alert('클릭')}
        size="xsmall"
        color="#6A8DFF"
        isCircle={false}
        isFullWidth={false}
        isDisabled
      >
        쿠폰 선택
      </Button>
      <Button
        variant="outlined"
        onClick={() => alert('클릭')}
        size="xsmall"
        color="#FE4977"
        isCircle={false}
        isFullWidth={false}
        isDisabled
      >
        포인트 사용
      </Button>
    </div>
  );
};

export default BtnTest;
