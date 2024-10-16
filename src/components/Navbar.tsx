"use client";
import Image from "next/image";
import { Dropdown } from "../atoms/Dropdown";
import { Avatar, Flex, Text } from "@mantine/core";
import { ModalUser } from "./ModalUser";
import { useDisclosure } from "@mantine/hooks";

const userName = "John Doe";

export function NavbarMinimal() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <nav className="w-full p-3 flex bg-zinc-900 justify-between shadow-xl">
      <ModalUser opened={opened} onClose={close} />
      <Image src="/w-indira.png" alt="Logo" width={180} height={30} />
      <Flex
        gap="md"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
        className="mr-4"
      >
        <Dropdown />
        <Flex align="center" gap="xs" onClick={open} className="cursor-pointer">
          <Avatar
            radius="xl"
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
          />
          <Text>{userName}</Text>
        </Flex>
      </Flex>
    </nav>
  );
}
