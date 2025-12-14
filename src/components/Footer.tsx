import { Flex, Text, Link } from '@radix-ui/themes';

export default function Footer() {
  return (
    <Flex asChild justify="center" align="center" p="4" mt="8" style={{ borderTop: '1px solid var(--gray-6)' }}>
      <footer>
        <Text size="2" color="gray">
          &copy; {new Date().getFullYear()} Code Memo. All rights reserved.
        </Text>
      </footer>
    </Flex>
  );
}