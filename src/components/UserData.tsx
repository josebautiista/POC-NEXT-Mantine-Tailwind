"use client";
import { DataTable } from "mantine-datatable";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { Patient } from "@/types/d.types";
import { countries, typeDocument } from "@/utils/data";

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
      className="mt-5 "
      withTableBorder
      records={records}
      columns={[
        {
          accessor: "IPTIPODOC",
          title: "Tipo de Documento",
          width: "200px",
          render: ({ IPTIPODOC }: Patient) => {
            const documentType = typeDocument?.find(
              (item: { value: string }) => item.value === IPTIPODOC.toString(),
            );
            return documentType ? documentType.label : "Desconocido";
          },
        },
        { accessor: "IPCODPACI", title: "Identificación" },
        { accessor: "IPNOMCOMP", title: "Nombre" },
        {
          accessor: "IPFECNACI",
          title: "Fecha de Nacimiento",
          textAlign: "right",
          render: ({ IPFECNACI }: Patient) =>
            dayjs(IPFECNACI).format("MMM D YYYY"),
        },
        {
          accessor: "IDPAIS",
          title: "Pais",
          render: ({ IDPAIS }: Patient) =>
            countries?.find((c) => c.value === IDPAIS.toString())?.label,
        },
        {
          accessor: "acciones",
          title: "Acciones",
          render: () => (
            <div className="flex gap-2">
              <IconEdit
                className="cursor-pointer hover:text-blue-500"
                onClick={() => alert("Edit")}
              />
              <IconTrash
                className="cursor-pointer hover:text-red-500"
                onClick={() => alert("Delete")}
              />
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
