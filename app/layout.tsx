// app/layout.tsx
import './globals.css';
import './styles.css';
import type {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'Ben Luis',
    description: '...',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <head>
            <link rel="icon" href="/assets/logo.svg" type="image/svg+xml"/>
            <title></title>
        </head>
        <body>{children}</body>
        </html>
    );
}