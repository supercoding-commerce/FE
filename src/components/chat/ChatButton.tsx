import Button from '@/components/common/Button/Button';
import Icon from '@/components/common/Icon';
import { theme } from '@/styles/theme';
import * as S from './Chat.styles';

type ChatButtonProps = {
  handleOpen: () => void;
};

const ChatButton = ({ handleOpen }: ChatButtonProps) => {
  return (
    <S.ChatButton
      onClick={() => {
        handleOpen();
      }}
    >
      <Button
        variant="contained"
        backgroundColor={theme.color.black}
        isCircle
        width="65px"
        height="65px"
      >
        <Icon name="IconChat" size={35} color="green" />
      </Button>
    </S.ChatButton>
  );
};

export default ChatButton;
