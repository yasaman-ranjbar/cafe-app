import { MenuProps } from '@/components/modules/MenuSection/menuSection.types';
import { create } from 'zustand';

type CardsProp = {
    cards: MenuProps[]
}

export const useCard = create<CardsProp>((set) => ({
    cards: [],
    addCard: (product: MenuProps) => {
        set(state => ({
            cards: [...state.cards, product]
        }))
    },
    removeCard: (id: number) => { set(state => ({ cards: state.cards.filter((item) => item.id !== id) })) }
}))