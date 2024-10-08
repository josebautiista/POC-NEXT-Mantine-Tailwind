import { UnstyledButton } from "@mantine/core";
import { IconUserFilled } from "@tabler/icons-react";

interface NavbarLinkProps {
  icon: typeof IconUserFilled;
  label: string;
  active?: boolean;
  onClick?(): void;
}

export default function NavbarLink({
  icon: Icon,
  active,
  onClick,
}: NavbarLinkProps) {
  return (
    <UnstyledButton
      onClick={onClick}
      className="w-12 h-12 rounded-md flex items-center justify-center text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-600 data-[active]:bg-blue-100 data-[active]:text-blue-500"
      data-active={active || undefined}
    >
      <Icon className="w-5 h-5" stroke={1.5} />
    </UnstyledButton>
  );
}
