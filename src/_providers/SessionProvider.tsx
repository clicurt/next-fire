'use client';

type Props = {
  children: React.ReactNode;
}

export default function SessionProvider({children}: Props) {
  return { children };
}