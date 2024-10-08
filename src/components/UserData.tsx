"use client";
import { DataTable } from "mantine-datatable";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { Patient } from "@/types/d.types";

const PAGE_SIZES = [10, 15, 20];

export default function UserData({ data }: { data: Patient[] }) {
  const [pageSize, setPageSize] = useState(PAGE_SIZES[1]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [pageSize]);

  const records = data.slice((page - 1) * pageSize, page * pageSize);

  return (
    <DataTable
      withTableBorder
      records={records}
      columns={[
        { accessor: "IPTIPODOC", title: "Tipo de Documento", width: 100 },
        { accessor: "IPCODPACI", title: "Identificación", width: 100 },
        { accessor: "IPPRINOMB", title: "Primer Nombre" },
        { accessor: "IPSEGNOMB", title: "Segundo Nombre" },
        { accessor: "IPNOMCOMP", title: "Primer Apellido" },
        { accessor: "NIVCODIGO", title: "Segundo Apellido" },
        {
          accessor: "IPFECNACI",
          title: "Fecha de Nacimiento",
          textAlign: "right",
          render: ({ IPFECNACI }: { IPFECNACI: string }) =>
            dayjs(IPFECNACI).format("MMM D YYYY"),
        },
        { accessor: "IDPAIS", title: "Pais" },
        {
          accessor: "acciones",
          title: "Acciones",
          render: () => (
            <div className="flex gap-2">
              <IconEdit />
              <IconTrash />
            </div>
          ),
        },
      ]}
      totalRecords={data.length}
      paginationActiveBackgroundColor="grape"
      recordsPerPage={pageSize}
      page={page}
      onPageChange={(p: number) => setPage(p)}
      recordsPerPageOptions={PAGE_SIZES}
      onRecordsPerPageChange={setPageSize}
    />
  );
}
