import { HelloWave } from '@/components/HelloWave';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Text } from '@/components/ui/text';
import { H1, H2, Muted, P } from '@/components/ui/typography';
import { useState } from 'react';
import { Platform, ScrollView, View } from 'react-native';

export default function HomeScreen() {
  const [progress, setProgress] = useState(33);

  return (
    <Card className="flex-1">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ padding: 24, gap: 24 }}
        showsVerticalScrollIndicator={false}>
        {/* Welcome Header */}
        <Card>
          <CardHeader>
            <View className="flex-row items-center gap-2">
              <H1>Welcome!</H1>
              <HelloWave />
            </View>
            <CardDescription>
              Explore the new UI components in your updated React Native app
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Get started with these common tasks</CardDescription>
          </CardHeader>
          <CardContent className="gap-3">
            <Button className="w-full">
              <Text className="text-primary-foreground">Start Building</Text>
            </Button>
            <View className="flex-row gap-2">
              <Button variant="outline" className="flex-1">
                <Text>Documentation</Text>
              </Button>
              <Button variant="secondary" className="flex-1">
                <Text>Examples</Text>
              </Button>
            </View>
          </CardContent>
        </Card>

        {/* Development Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Development Progress</CardTitle>
            <CardDescription>Your project setup completion</CardDescription>
          </CardHeader>
          <CardContent className="gap-4">
            <View className="gap-2">
              <View className="flex-row items-center justify-between">
                <P>Project Setup</P>
                <Badge variant="default">
                  <Text className="text-primary-foreground">{progress}%</Text>
                </Badge>
              </View>
              <Progress value={progress} className="w-full" />
            </View>
            <View className="gap-2">
              <P>✅ Expo Router configured</P>
              <P>✅ UI Components installed</P>
              <P>✅ Theming setup complete</P>
              <P>🔄 Custom components integration</P>
            </View>
          </CardContent>
        </Card>

        {/* Getting Started Steps */}
        <Card>
          <CardHeader>
            <H2>Getting Started</H2>
            <CardDescription>Follow these steps to build your app</CardDescription>
          </CardHeader>
          <CardContent className="gap-4">
            <View className="gap-2">
              <View className="flex-row items-center gap-2">
                <Badge variant="outline">
                  <Text>1</Text>
                </Badge>
                <P className="font-medium">Explore Components</P>
              </View>
              <Muted className="ml-8">Check out the new UI components in the Explore tab</Muted>
            </View>

            <Separator />

            <View className="gap-2">
              <View className="flex-row items-center gap-2">
                <Badge variant="outline">
                  <Text>2</Text>
                </Badge>
                <P className="font-medium">Customize Styling</P>
              </View>
              <Muted className="ml-8">Modify colors and themes in global.css and constants</Muted>
            </View>

            <Separator />

            <View className="gap-2">
              <View className="flex-row items-center gap-2">
                <Badge variant="outline">
                  <Text>3</Text>
                </Badge>
                <P className="font-medium">Add Your Features</P>
              </View>
              <Muted className="ml-8">Start building your app with the component library</Muted>
            </View>
          </CardContent>
        </Card>

        {/* Developer Tools */}
        <Card>
          <CardHeader>
            <CardTitle>Developer Tools</CardTitle>
            <CardDescription>Quick access to development features</CardDescription>
          </CardHeader>
          <CardContent className="gap-3">
            <P>
              Press{' '}
              <Badge variant="secondary">
                <Text className="font-mono">
                  {Platform.select({
                    ios: '⌘ + D',
                    android: '⌘ + M',
                    web: 'F12',
                  })}
                </Text>
              </Badge>{' '}
              to open developer tools
            </P>
            <Muted>Edit app/(tabs)/index.tsx to see changes in real-time</Muted>
          </CardContent>
        </Card>

        {/* Reset Project */}
        <Card>
          <CardHeader>
            <CardTitle>Fresh Start</CardTitle>
            <CardDescription>Ready to start building your own app?</CardDescription>
          </CardHeader>
          <CardContent className="gap-3">
            <P>
              Run{' '}
              <Badge variant="outline">
                <Text className="font-mono">npm run reset-project</Text>
              </Badge>{' '}
              to get a clean slate
            </P>
            <Muted>
              This will move the current app to app-example and create a new app directory
            </Muted>
            <Button variant="destructive" className="w-full">
              <Text className="text-destructive-foreground">Reset Project</Text>
            </Button>
          </CardContent>
        </Card>
      </ScrollView>
    </Card>
  );
}
