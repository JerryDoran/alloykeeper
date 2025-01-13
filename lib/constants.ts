export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';
export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Alloy Keeper';
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  'A modern alloy tracker dashboard built with Next.js 15, Postgres, Shadcn';
export const ITEMS_PER_PAGE = Number(process.env.ITEMS_PER_PAGE) || 5;
