import { ActionIcon, Group } from "@mantine/core";
import { IconEdit, IconTrash } from "@tabler/icons-react";

interface DataGridActionsProps {
  onDelete?: () => void;
  onEdit?: () => void;
  disabled?: {
    delete?: boolean;
    edit?: boolean;
  };
}

const DataGridActions = ({
  onDelete,
  onEdit,
  disabled = {
    edit: false,
    delete: false,
  },
}: DataGridActionsProps) => {
  return (
    <Group gap={4} justify="center" wrap="nowrap">
      <ActionIcon
        size="sm"
        variant="subtle"
        color="blue"
        disabled={disabled.edit}
        onClick={onEdit}
      >
        <IconEdit size={16} />
      </ActionIcon>
      <ActionIcon
        size="sm"
        variant="subtle"
        color="red"
        disabled={disabled.delete}
        onClick={onDelete}
      >
        <IconTrash size={16} />
      </ActionIcon>
    </Group>
  );
};

export default DataGridActions;
