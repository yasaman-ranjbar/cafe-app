export type SelectBoxProps = {
  items: SelectBoxItems[];
  name?: string;
  error?: string;
};


export type SelectBoxItems = {
  id: number;
  value: string;
  label: string;
};