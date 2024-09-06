interface Modal {
  isOpen: boolean;
  close: () => void;
  open: () => void;
  toggle: () => void;
}

interface InvoiceInfo {
  heading: string;
  color: string;
  total: string;
  decimal: string;
  amount: string;
}

interface InvoiceItem {
  status: string;
  color: string;
  border: string;
  background: string;
  modal: Modal;
}

interface ModalProps {
  modal: Modal;
}

interface ItemsProps {
  heading: string;
  text: string;
  amount: string;
  num: string;
  total: string;
}
