import { ProductDetailsProps } from "@/components/modules/MenuSection/MenuSection";
import { create } from "zustand";

type CardsProp = {
  cards: ProductDetailsProps[];
  addCard: (product: ProductDetailsProps) => void;
  removeCard: (id: string) => void;
  increaseProduct: (id: string) => void;
  decreaseProduct: (id: string) => void;
};

export const useCard = create<CardsProp>((set) => ({
  cards: [],
  addCard: (product: ProductDetailsProps) => {
    set((state) => ({
      cards: [...state.cards, product],
    }));
  },
  removeCard: (id: string) => {
    set((state) => ({ cards: state.cards.filter((item) => item.id !== id) }));
  },
  increaseProduct: (id: string) => {
    set((state) => ({
      cards: state.cards.map((item) =>
        item.id === id ? { ...item, qt: item.qt + 1 } : item
      ),
    }));
  },
  decreaseProduct: (id: string) => {
    set((state) => ({
      cards: state.cards.map((item) =>
        item.id === id ? { ...item, qt: item.qt - 1 } : item
      ),
    }));
  }
}));
