import Sidebar from "@/components/templates/Admin/Sidebar";
import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  {
    return (
        <div className="flex h-screen w-full">
          <div className=" bg-white p-12">
            <Sidebar />
          </div>
          <div className="flex-1 bg-lightGray p-12">{children}</div>
        </div>
    );
  }
};

export default AdminLayout;
