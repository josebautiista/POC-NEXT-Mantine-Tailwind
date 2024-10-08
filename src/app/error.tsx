"use client";
import { Title, Text, Button, Container, Group } from "@mantine/core";

export default function ServerError() {
  return (
    <div className="pt-20 pb-32 bg-purple-900 h-screen flex items-center">
      <Container>
        <div className="text-center font-extrabold text-[220px] leading-none mb-[calc(var(--mantine-spacing-xl)*1.5)] text-purple-300 sm:text-[120px]">
          500
        </div>
        <Title className="text-center font-extrabold text-[38px] text-white sm:text-[32px] font-[Greycliff CF, var(--mantine-font-family)]">
          Algo malo ha pasado!
        </Title>
        <Text
          size="lg"
          ta="center"
          className="max-w-[540px] mx-auto mt-[var(--mantine-spacing-xl)] mb-[calc(var(--mantine-spacing-xl)*1.5)] text-blue-100"
        >
          Parece que hubo un error en el servidor.
        </Text>
        <Group justify="center">
          <Button
            variant="white"
            size="md"
            onClick={() => window.location.reload()}
          >
            Refresca la página
          </Button>
        </Group>
      </Container>
    </div>
  );
}
