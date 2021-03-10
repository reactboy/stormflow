import dayjs from 'dayjs';

export const formatDateString = (dateString: string, format = 'MM/DD/YY') =>
dayjs(dateString).format(format);