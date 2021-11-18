import React from 'react';
import { Button } from '@chakra-ui/core';
import { Modal, 
    ModalOverlay, 
    ModalHeader, 
    ModalCloseButton,
    ModalContent,
    ModalBody,
    ModalFooter
} from '@chakra-ui/modal';
import { useDisclosure } from '@chakra-ui/hooks';

export const GitHubModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem L
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
