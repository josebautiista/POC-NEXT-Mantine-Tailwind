"use client";
import { Button, Grid, GridCol, Group, Select, TextInput } from "@mantine/core";
import { hasLength, isNotEmpty, useForm } from "@mantine/form";
import { DateInput } from "@mantine/dates";
import { countries, typeDocument } from "../utils/data";
import { notifications } from "@mantine/notifications";
import {
  IconCake,
  IconCheck,
  IconIdBadge2,
  IconUser,
  IconUserFilled,
  IconUserScan,
  IconWorld,
} from "@tabler/icons-react";

export default function FormCreate() {
  const form = useForm({
    initialValues: {
      identification: "",
      firstName: "",
      secondName: "",
      lastName: "",
      secondLastName: "",
      typeDocument: "1",
      country: "1",
      birthDate: "",
    },

    validate: {
      identification: hasLength(
        { min: 2, max: 10 },
        "La identificación debe tener entre 2 y 10 caracteres",
      ),
      firstName: isNotEmpty("El primer nombre es requerido"),
      lastName: isNotEmpty("El primer apellido es requerido"),
      typeDocument: isNotEmpty("El tipo de documento es requerido"),
      birthDate: (value) => {
        const date = new Date(value);
        const today = new Date();
        return value && date < today ? null : "Ingresa una fecha válida";
      },
    },
  });

  const handleValidation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    form.validate();
    if (form.isValid()) {
      const id = notifications.show({
        loading: true,
        message: "Creando paciente. Por favor, espere un momento...",
        autoClose: false,
        withCloseButton: false,
      });

      setTimeout(() => {
        notifications.update({
          id,
          color: "teal",
          message: "Paciente creado exitosamente",
          icon: <IconCheck style={{ width: "1.5rem", height: "1.5rem" }} />,
          loading: false,
          autoClose: 2000,
        });
      }, 3000);
    }
  };

  return (
    <form className="mt-5" onSubmitCapture={handleValidation}>
      <Grid columns={12} gutter="sm">
        <GridCol span={{ base: 12, lg: 6 }}>
          <Select
            label="Tipo de Documento"
            placeholder="Tipo de Documento"
            withAsterisk
            mt={"md"}
            key={form.key("typeDocument")}
            {...form.getInputProps("typeDocument")}
            data={typeDocument}
            checkIconPosition="right"
            leftSection={<IconUserScan className="w-4 h-4" />}
          />
          <TextInput
            label="Primer Nombre"
            placeholder="Primer Nombre"
            withAsterisk
            mt="md"
            key={form.key("firstName")}
            {...form.getInputProps("firstName")}
            leftSection={<IconUserFilled className="w-4 h-4" />}
          />
          <TextInput
            label="Primer Apellido"
            placeholder="Primer Apellido"
            withAsterisk
            mt="md"
            key={form.key("lastName")}
            {...form.getInputProps("lastName")}
            leftSection={<IconUserFilled className="w-4 h-4" />}
          />
          <TextInput
            label="Segundo Apellido"
            placeholder="Segundo Apellido"
            mt="md"
            key={form.key("secondLastName")}
            {...form.getInputProps("secondLastName")}
            leftSection={<IconUser className="w-4 h-4" />}
          />
        </GridCol>
        <GridCol span={{ base: 12, lg: 6 }}>
          <TextInput
            label="Identificación"
            placeholder="Identificación"
            withAsterisk
            mt="md"
            key={form.key("identification")}
            {...form.getInputProps("identification")}
            leftSection={<IconIdBadge2 className="w-4 h-4" />}
          />
          <TextInput
            label="Segundo Nombre"
            placeholder="Segundo Nombre"
            mt="md"
            key={form.key("secondName")}
            {...form.getInputProps("secondName")}
            leftSection={<IconUser className="w-4 h-4" />}
          />
          <Select
            label="País"
            placeholder="País"
            mt={"md"}
            key={form.key("country")}
            {...form.getInputProps("country")}
            data={countries}
            checkIconPosition="right"
            searchable
            nothingFoundMessage="No existe"
            leftSection={<IconWorld className="w-4 h-4" />}
          />
          <DateInput
            label="Fecha de Nacimiento"
            withAsterisk
            placeholder="Fecha de Nacimiento"
            key={form.key("birthDate")}
            {...form.getInputProps("birthDate")}
            mt="md"
            leftSection={<IconCake className="w-4 h-4" />}
          />
        </GridCol>
      </Grid>

      <Group justify="flex-end" mt="md">
        <Button type="submit">Guardar</Button>
        <Button variant="filled" color="#e64f57" onClick={() => form.reset()}>
          Limpiar
        </Button>
      </Group>
    </form>
  );
}
