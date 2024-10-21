import dayjs from "dayjs";

export const formattedDate = (date: Date) => dayjs(date).format("MMM D YYYY");
