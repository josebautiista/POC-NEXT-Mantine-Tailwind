"use client";
import { IconUserFilled } from "@tabler/icons-react";
import { Dropdown } from "./Dropdown";
import { Flex } from "@mantine/core";
import NavbarLink from "./NavbarLink";

export function NavbarMinimal() {
  return (
    <nav className="w-full p-3 flex bg-slate-900 justify-end">
      <Flex
        gap="md"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
      >
        <Dropdown />
        <NavbarLink
          icon={IconUserFilled}
          label="My Profile"
          onClick={() => alert("Profile")}
        />
      </Flex>
    </nav>
  );
}
