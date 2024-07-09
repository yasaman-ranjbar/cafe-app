export interface CartProductProps {
  decreaseProduct: (id: number) => void;
  increaseProduct: (id: number) => void;
  removeProduct: (id: number) => void;
}
