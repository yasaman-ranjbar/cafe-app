export type MenuProps = {
    id?: number;
    title: string;
    desc: string;
    price: number;
    img: string;
    off?: number;
    score?: number;
    type?: "cold" | "hot";
    qt:number;
};