import { ProductDetailsProps } from "@/services/requests/product";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import defaultImage from "@/public/images/menu-1.jpg";
import { Chip } from "@mui/material";

const ProductList = ({ products }: { products: ProductDetailsProps[] }) => {
  const columns: GridColDef[] = [
    { field: "_id", headerName: "ID", width: 70 },
    {
      field: "title",
      headerName: "Title",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex gap-2">
            <Image
              className="rounded-full"
              src={
                params.row.image === ""
                  ? defaultImage
                  : `/images/${params.row.image}`
              }
              alt={params.row.title}
              width={50}
              height={50}
            />
            <span>{params.row.title}</span>
          </div>
        );
      },
    },
    { field: "description", headerName: "Description", width: 230 },
    {
      field: "price",
      headerName: "Price",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
    },
    {
      field: "tags",
      headerName: "Tags",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 260,
      renderCell: (params) =>
        params.row.tags.map((item: string) => (
          <Chip size="small" key={item} label={item} />
        )),
    },
  ];

  return (
    <div className="mt-8">
      <DataGrid
        rows={products}
        columns={columns}
        getRowId={(row) => row._id}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
};

export default ProductList;
