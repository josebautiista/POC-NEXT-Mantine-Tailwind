import {
  ActionIcon,
  Button,
  Flex,
  Popover,
  PopoverTarget,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import {
  IconChevronDown,
  IconEdit,
  IconSettings,
  IconTrash,
  IconUpload,
  IconMicrophone,
  IconTruckReturn,
} from "@tabler/icons-react";

export const DropDownActions = () => {
  const data = [
    { icon: <IconEdit size={16} color="#9c36b5" />, name: "Realizar Lectura" },
    {
      icon: <IconUpload size={16} color="#9c36b5" />,
      name: "Enviar a Transcripción",
    },
    {
      icon: <IconMicrophone size={16} color="#9c36b5" />,
      name: "Grabar Audio",
    },
    { icon: <IconSettings size={16} color="#9c36b5" />, name: "Lanzar Visor" },
    {
      icon: <IconTruckReturn size={16} color="#9c36b5" />,
      name: "Devolver Examen",
    },
    { icon: <IconTrash size={16} color="#9c36b5" />, name: "Eliminar" },
  ];

  const handleActionClick = (actionName: string) => {
    notifications.show({
      title: `Acción seleccionada`,
      message: `Has seleccionado: ${actionName}`,
      position: "bottom-right",
    });
  };

  return (
    <Popover width={200} position="bottom" withArrow shadow="md">
      <PopoverTarget>
        <ActionIcon variant="filled">
          <IconChevronDown size={20} />
        </ActionIcon>
      </PopoverTarget>
      <Popover.Dropdown>
        <Flex direction="column" justify={"center"} align="start">
          {data.map((item, index) => (
            <Button
              key={index}
              variant="subtle"
              onClick={() => handleActionClick(item.name)}
              leftSection={item.icon}
              className="w-full flex items-start text-white"
            >
              {item.name}
            </Button>
          ))}
        </Flex>
      </Popover.Dropdown>
    </Popover>
  );
};
