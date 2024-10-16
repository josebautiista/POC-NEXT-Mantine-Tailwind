import { Tabs, TabsList, TabsPanel, TabsTab } from "@mantine/core";
import { IconUsers, IconFileSpreadsheet } from "@tabler/icons-react";
import UserData from "./UserData";
import FormCreate from "./FormCreate";

export default async function GridCustom() {
  const response = await fetch("https://demoris.indira.ai/api/v2/mock/patient");
  const result = await response.json();

  return (
    <Tabs defaultValue="create">
      <TabsList>
        <TabsTab
          value="create"
          leftSection={<IconFileSpreadsheet className="w-5 h-5" />}
        >
          Crear
        </TabsTab>
        <TabsTab value="users" leftSection={<IconUsers className="w-5 h-5" />}>
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
