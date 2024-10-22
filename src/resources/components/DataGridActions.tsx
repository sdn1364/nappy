import { ActionIcon, Group, Text } from "@mantine/core";
import { IconCheck, IconEdit, IconTrash, IconX } from "@tabler/icons-react";
import { useState } from "react";
interface DataGridActionsProps {
  onDelete?: () => void;
  onEdit?: () => void;
  loading?: boolean;
  disabled?: {
    delete?: boolean;
    edit?: boolean;
  };
}

const DataGridActions = ({
  onDelete,
  onEdit,
  loading,
  disabled = {
    edit: false,
    delete: false,
  },
}: DataGridActionsProps) => {
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  return isDeleting ? (
    <Group gap={1}>
      <Text
        size="xs"
        c="light-dark(var(--mantine-color-dark-8),var(--mantine-color-dark-2))"
      >
        Sure?
      </Text>
      <ActionIcon.Group ml={3}>
        <ActionIcon
          size="compact-xs"
          color="green"
          variant="light"
          loading={loading}
          onClick={onDelete}
        >
          <IconCheck size="1rem" strokeWidth={1.5} />
        </ActionIcon>
        <ActionIcon
          size="compact-xs"
          color="red"
          variant="light"
          onClick={() => setIsDeleting(false)}
        >
          <IconX size="1rem" strokeWidth={1.5} />
        </ActionIcon>
      </ActionIcon.Group>
    </Group>
  ) : (
    <Group justify="center">
      <ActionIcon.Group>
        <ActionIcon
          size="sm"
          variant="default"
          c="blue"
          disabled={disabled.edit}
          onClick={onEdit}
        >
          <IconEdit size="1rem" strokeWidth={1.5} />
        </ActionIcon>
        <ActionIcon
          size="sm"
          variant="default"
          c="red"
          disabled={disabled.delete}
          onClick={() => setIsDeleting(true)}
        >
          <IconTrash size="1rem" strokeWidth={1.5} />
        </ActionIcon>
      </ActionIcon.Group>
    </Group>
  );
};

export default DataGridActions;
