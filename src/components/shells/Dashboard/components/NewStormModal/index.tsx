import { useRef } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Textarea,
} from '@chakra-ui/react';

type NewStormModalProps = {
  isOpen: boolean;
  onClose: () => void;
  headerText: string;
  inputPlaceholder: string;
  onStorm: () => void;
};

export const NewStormModal: React.FC<NewStormModalProps> = (props) => {
  const { isOpen, onClose, headerText, inputPlaceholder, onStorm } = props;
  const initialFocusRef = useRef();
  return (
    <Modal initialFocusRef={initialFocusRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{headerText}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Textarea ref={initialFocusRef} placeholder={inputPlaceholder} />
        </ModalBody>
        <ModalFooter>
          <Button onClick={onStorm}>STORM</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
