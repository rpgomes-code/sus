import { Link, Stack } from 'expo-router';
import { Card } from '~/components/ui/card';
import { Text } from '~/components/ui/text';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <Card className="flex-1 items-center justify-center p-5">
        <Text>This screen does not exist.</Text>
        <Link href="/" className="mt-4 py-4">
          <Text>Go to home screen!</Text>
        </Link>
      </Card>
    </>
  );
}
