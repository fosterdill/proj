'use client';
import { Button } from '@chakra-ui/react';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    (async () => {
      const res = await fetch('/api');
      const json = await res.json();
    })();
  }, []);

  return (
    <div>
      <Button>hi</Button>
    </div>
  );
}
