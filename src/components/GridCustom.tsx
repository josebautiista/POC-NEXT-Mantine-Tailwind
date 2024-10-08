import { rem, Tabs, TabsList, TabsPanel, TabsTab } from "@mantine/core";
import { IconUsers, IconFileSpreadsheet } from "@tabler/icons-react";
import UserData from "./UserData";
import FormCreate from "./FormCreate";

export default async function GridCustom() {
  const iconStyle = { width: rem(15), height: rem(15) };

  const response = await fetch("https://demoris.indira.ai/api/v2/mock/patient");
  const result = await response.json();

  return (
    <Tabs defaultValue="create" color="grape">
      <TabsList>
        <TabsTab
          value="create"
          leftSection={<IconFileSpreadsheet style={iconStyle} />}
        >
          Crear
        </TabsTab>
        <TabsTab value="users" leftSection={<IconUsers style={iconStyle} />}>
          Usuarios
        </TabsTab>
      </TabsList>

      <TabsPanel value="create">
        <FormCreate />
      </TabsPanel>

      <TabsPanel value="users">
        <UserData data={result.data} />
      </TabsPanel>
    </Tabs>
  );
}
