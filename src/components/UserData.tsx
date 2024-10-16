"use client";
import { DataTable, useDataTableColumns } from "mantine-datatable";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

import { Patient } from "@/types/d.types";
import { countries, typeDocument } from "@/utils/data";
import { DropDownActions } from "@/atoms/DropDownActions";

const PAGE_SIZES = [10, 15, 20];

export default function UserData({ data }: { data: Patient[] }) {
  const [pageSize, setPageSize] = useState(PAGE_SIZES[1]);
  const [page, setPage] = useState(1);
  const key = "draggable-indira";

  const { effectiveColumns, resetColumnsToggle } = useDataTableColumns<Patient>(
    {
      key,
      columns: [
        {
          accessor: "IPTIPODOC",
          title: "Tipo de Documento",
          width: "200px",
          draggable: true,
          resizable: true,
          render: ({ IPTIPODOC }: Patient) => {
            const documentType = typeDocument?.find(
              (item: { value: string }) => item.value === IPTIPODOC.toString(),
            );
            return documentType ? documentType.label : "Desconocido";
          },
        },
        {
          accessor: "IPCODPACI",
          title: "Identificación",
          draggable: true,
          resizable: true,
        },
        {
          accessor: "IPPRINOMB",
          title: "Primer Nombre",
          ellipsis: true,
          draggable: true,
          toggleable: true,
          resizable: true,
        },

        {
          accessor: "IPSEGNOMB",
          title: "Segundo Nombre",
          ellipsis: true,
          draggable: true,
          toggleable: true,
          resizable: true,
        },
        {
          accessor: "IPPRIAPEL",
          title: "Primer Apellido",
          ellipsis: true,
          draggable: true,
          toggleable: true,
          resizable: true,
        },
        {
          accessor: "IPSEGAPEL",
          title: "Segundo Apellido",
          ellipsis: true,
          draggable: true,
          toggleable: true,
          resizable: true,
        },
        {
          accessor: "IPNOMCOMP",
          title: "Nombre Completo",
          ellipsis: true,
          draggable: true,
          toggleable: true,
          resizable: true,
        },
        {
          accessor: "IPFECNACI",
          title: "Fecha de Nacimiento",
          render: ({ IPFECNACI }: Patient) =>
            dayjs(IPFECNACI).format("MMM D YYYY"),
          visibleMediaQuery: (theme) => `(min-width: ${theme.breakpoints.xs})`,
          draggable: true,
          toggleable: true,
          resizable: true,
        },
        {
          accessor: "IDPAIS",
          title: "Pais",
          render: ({ IDPAIS }: Patient) =>
            countries?.find((c) => c.value === IDPAIS.toString())?.label,
          draggable: true,
          toggleable: true,
          resizable: true,
        },
        {
          accessor: "acciones",
          title: "Acciones",
          width: "100px",
          cellsClassName: "text-center",
          render: () => <DropDownActions />,
          draggable: true,
          toggleable: true,
          resizable: true,
        },
      ],
    },
  );

  useEffect(() => {
    setPage(1);
  }, [pageSize]);

  useEffect(() => {
    resetColumnsToggle();
  }, []);

  const records = data.slice((page - 1) * pageSize, page * pageSize);

  return (
    <DataTable
      idAccessor="ID"
      pinLastColumn
      storeColumnsKey={key}
      striped
      highlightOnHover
      className="mt-5 "
      withTableBorder
      records={records}
      columns={effectiveColumns}
      totalRecords={data.length}
      recordsPerPage={pageSize}
      page={page}
      onPageChange={(p: number) => setPage(p)}
      recordsPerPageOptions={PAGE_SIZES}
      onRecordsPerPageChange={setPageSize}
    />
  );
}
