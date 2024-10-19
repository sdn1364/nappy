import { Center, Loader } from "@mantine/core";

const Loading = () => {
  return (
    <Center
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Loader />
    </Center>
  );
};

export default Loading;
