interface ModalProps {
    onClose: () => void;
    product: {
      photo: string;
      productName: string;
      price: number;
    };
  }

export default ModalProps;