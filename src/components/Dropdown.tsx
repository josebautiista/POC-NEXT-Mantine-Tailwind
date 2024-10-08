import { Select } from "@mantine/core";
import { data } from "../utils/data";

export const Dropdown = () => {
  return (
    <Select
      placeholder="Escoge una Compañía"
      data={data}
      searchable
      nothingFoundMessage="No existe"
      checkIconPosition="right"
      variant="filled"
      defaultValue="1"
      maxDropdownHeight={200}
    />
  );
};
