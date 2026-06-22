export interface CartProductProps {
  decreaseProduct: (id: string) => void;
  increaseProduct: (id: string) => void;
  removeProduct: (id: string) => void;
}
