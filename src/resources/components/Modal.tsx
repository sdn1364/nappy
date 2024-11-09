import { Modal as MantineModal } from "@mantine/core";
import { PropsWithChildren } from "react";
type ModalProps = {
  opened: boolean;
  onClose: () => void;
  title: string;
};

const Modal = ({
  children,
  opened,
  onClose,
  title,
}: PropsWithChildren<ModalProps>) => {
  return (
    <MantineModal
      opened={opened}
      onClose={onClose}
      title={title}
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
      size="xs"
    >
      {children}
    </MantineModal>
  );
};

export default Modal;
