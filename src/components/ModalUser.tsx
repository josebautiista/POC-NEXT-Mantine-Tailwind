import { Modal, Button, Text, Divider, Avatar, Flex } from "@mantine/core";

interface Props {
  opened: boolean;
  onClose: () => void;
}

export const ModalUser = ({ opened, onClose: close }: Props) => {
  const handleLogout = () => {
    alert("Sesión cerrada");
  };

  return (
    <Modal opened={opened} onClose={close} title="Perfil de Usuario" centered>
      <Flex justify={"center"} mb="md">
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
          size="xl"
        />
      </Flex>

      <Text className="text-lg font-bold text-center">John Doe</Text>
      <Text className="text-gray-500 text-center">john.doe@example.com</Text>

      <Divider my="sm" />

      <Flex justify="center" className="flex-col" gap={"sm"} mt="md">
        <Button variant="subtle" onClick={close}>
          Configuración
        </Button>
        <Button variant="outline" color="red" onClick={handleLogout}>
          Cerrar sesión
        </Button>
      </Flex>
    </Modal>
  );
};
