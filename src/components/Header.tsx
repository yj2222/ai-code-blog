import { Flex, Heading, Link } from '@radix-ui/themes';

export default function Header() {
  return (
    <Flex asChild justify="between" align="center" p="4" style={{ borderBottom: '1px solid var(--gray-6)' }}>
      <header>
        <Heading size="6">
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Code Memo
          </Link>
        </Heading>
        <Flex gap="4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </Flex>
      </header>
    </Flex>
  );
}