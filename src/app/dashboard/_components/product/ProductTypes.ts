export type Product = {
  name: string;
  url: string;
  description?: string | null;
  id: string;
};

export type ProductGridProps = {
  products: Product[];
};
