"use client";
import Image from "next/image";
import { Dropdown } from "../atoms/Dropdown";
import { Avatar, Flex, Text } from "@mantine/core";

const userName = "John Doe";

export function NavbarMinimal() {
  return (
    <nav className="w-full p-3 flex bg-zinc-900 justify-between shadow-xl">
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
        <Flex align="center" gap="xs">
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
