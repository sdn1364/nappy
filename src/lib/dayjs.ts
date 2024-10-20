import dayjs, { Dayjs } from "dayjs";

export const formattedDate = (date: Dayjs) => dayjs(date).format("MMM D YYYY");
