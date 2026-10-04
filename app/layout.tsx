import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import './globals.css';

export const dynamic = 'force-static';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const metadata: Metadata = {
  metadataBase: new URL('https://seensnow.github.io/snowman-workshop/'),
  title: '雪人工坊',
  icons: { icon: [{ url: `${basePath}/favicon.svg`, type: 'image/svg+xml' }] },
  description: '雪人工坊的个人空间，记录项目、笔记和日常想法。',
  openGraph: {
    title: '雪人工坊',
    description: '记录项目、笔记和日常想法的个人空间。',
    type: 'website',
    images: [{ url: 'https://seensnow.github.io/snowman-workshop/og-cn.png', width: 1731, height: 909, alt: '雪景中的雪人工坊' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '雪人工坊',
    description: '记录项目、笔记和日常想法的个人空间。',
    images: ['https://seensnow.github.io/snowman-workshop/og-cn.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" style={{
      '--cursor-ice': `url("${basePath}/cursor-ice.svg") 3 2`,
    } as CSSProperties}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
