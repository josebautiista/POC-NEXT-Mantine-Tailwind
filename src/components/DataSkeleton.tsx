import { Skeleton, TableTd, TableTr } from "@mantine/core";

export const DataSkeleton = () => {
  const rows = 10;
  const columns = 9;

  return (
    <>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <TableTr key={rowIndex}>
          {Array.from({ length: columns }).map((_, colIndex) => (
            <TableTd key={colIndex}>
              <Skeleton height={30} width="100%" radius="md" />
            </TableTd>
          ))}
        </TableTr>
      ))}
    </>
  );
};
