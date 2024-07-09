import { MenuProps } from "@/components/modules/MenuSection/menuSection.types";
import { create } from "zustand";

type CardsProp = {
  cards: MenuProps[];
  addCard: (product: MenuProps) => void;
  removeCard: (id: number) => void;
  increaseProduct: (id: number) => void;
  decreaseProduct: (id: number) => void;
};

export const useCard = create<CardsProp>((set) => ({
  cards: [],
  addCard: (product: MenuProps) => {
    set((state) => ({
      cards: [...state.cards, product],
    }));
  },
  removeCard: (id: number) => {
    set((state) => ({ cards: state.cards.filter((item) => item.id !== id) }));
  },
  increaseProduct: (id: number) => {
    set((state) => ({
      cards: state.cards.map((item) =>
        item.id === id ? { ...item, qt: item.qt + 1 } : item
      ),
    }));
  },
  decreaseProduct: (id: number) => {
    set((state) => ({
      cards: state.cards.map((item) =>
        item.id === id ? { ...item, qt: item.qt - 1 } : item
      ),
    }));
  }
}));
