import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'GMFILMS | Equipment Rental',
  description: 'Equipment rental for every need',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>{children}</div>
  );
}