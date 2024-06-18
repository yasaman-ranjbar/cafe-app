export type MenuProps = {
    id?: 1;
    title: string;
    desc: string;
    price: number;
    img: string;
    off?: number;
    score?: number;
    type?: "cold" | "hot";
};