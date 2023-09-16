import Button from '@/components/common/Button/Button';
import Icon from '@/components/common/Icon';
import { theme } from '@/styles/theme';

type ChatButtonProps = {
  handleOpen: () => void;
};

const ChatButton = ({ handleOpen }: ChatButtonProps) => {
  return (
    <div
      onClick={() => {
        handleOpen();
      }}
    >
      <Button
        variant="contained"
        backgroundColor={theme.color.black}
        isCircle
        width="60px"
        height="60px"
      >
        <Icon name="IconChat" size={35} color="green" />
      </Button>
    </div>
  );
};

export default ChatButton;
