import { ActionIcon, Center, Group, Text } from "@mantine/core";
import { IconCheck, IconEdit, IconTrash, IconX } from "@tabler/icons-react";
import { motion } from "framer-motion";
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

  return (
    <Center w="100%" h="100%" style={{ overflow: "hidden" }}>
      {isDeleting ? (
        <motion.div
          key="popping"
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 0.3 }}
        >
          <Group gap={3}>
            <Text size="xs" c="dark">
              Sure?
            </Text>
            <ActionIcon
              ml="xs"
              color="green"
              variant="light"
              size="xs"
              loading={loading}
              onClick={onDelete}
            >
              <IconCheck size="1rem" strokeWidth={1.5} />
            </ActionIcon>
            <ActionIcon
              color="red"
              variant="light"
              size="xs"
              onClick={() => setIsDeleting(false)}
            >
              <IconX size="1rem" strokeWidth={1.5} />
            </ActionIcon>
          </Group>
        </motion.div>
      ) : (
        <Group gap={4} justify="center" wrap="nowrap">
          <ActionIcon
            size="sm"
            variant="light"
            color="blue"
            disabled={disabled.edit}
            onClick={onEdit}
          >
            <IconEdit size="1rem" strokeWidth={1.5} />
          </ActionIcon>
          <ActionIcon
            size="sm"
            variant="light"
            color="red"
            disabled={disabled.delete}
            onClick={() => setIsDeleting(true)}
          >
            <IconTrash size="1rem" strokeWidth={1.5} />
          </ActionIcon>
        </Group>
      )}
    </Center>
  );
};

export default DataGridActions;
