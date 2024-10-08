"use client";
import { Dropdown } from "../atoms/Dropdown";
import { Avatar, Flex, Text } from "@mantine/core";

const userName = "John Doe";

export function NavbarMinimal() {
  return (
    <nav className="w-full p-3 flex bg-zinc-900 justify-end shadow-xl">
      <Flex
        gap="md"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
      >
        <Dropdown />
        <Flex align="center" gap="xs">
          <Avatar radius="xl" />
          <Text>{userName}</Text>
        </Flex>
      </Flex>
    </nav>
  );
}
