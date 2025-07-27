import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { Switch } from '@/components/ui/switch';
import { Text } from '@/components/ui/text';
import { Textarea } from '@/components/ui/textarea';
import { Code, H1, H2, H3, Muted, P } from '@/components/ui/typography';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Check } from '~/lib/icons/Check';

export default function ExploreScreen() {
  const [switchValue, setSwitchValue] = useState(false);
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [progress, setProgress] = useState(65);

  return (
    <Card className="flex-1">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ padding: 24, gap: 24 }}
        showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Card>
          <CardHeader>
            <H1>UI Components</H1>
            <CardDescription>
              Explore the complete set of UI components available in your app
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Buttons Demo */}
        <Card>
          <CardHeader>
            <H2>Buttons</H2>
            <CardDescription>Various button styles and variants</CardDescription>
          </CardHeader>
          <CardContent className="gap-4">
            <Button className="w-full">
              <Text className="text-primary-foreground">Primary Button</Text>
            </Button>
            <View className="flex-row gap-2">
              <Button variant="secondary" className="flex-1">
                <Text>Secondary</Text>
              </Button>
              <Button variant="outline" className="flex-1">
                <Text>Outline</Text>
              </Button>
            </View>
            <View className="flex-row gap-2">
              <Button variant="ghost" className="flex-1">
                <Text>Ghost</Text>
              </Button>
              <Button variant="destructive" className="flex-1">
                <Text className="text-destructive-foreground">Destructive</Text>
              </Button>
            </View>
          </CardContent>
        </Card>

        {/* Form Controls */}
        <Card>
          <CardHeader>
            <H2>Form Controls</H2>
            <CardDescription>Interactive input components</CardDescription>
          </CardHeader>
          <CardContent className="gap-4">
            <View className="gap-2">
              <P className="font-medium">Text Input</P>
              <Input
                placeholder="Enter some text..."
                value={inputValue}
                onChangeText={setInputValue}
              />
            </View>

            <View className="gap-2">
              <P className="font-medium">Textarea</P>
              <Textarea placeholder="Enter multiple lines..." />
            </View>

            <View className="flex-row items-center justify-between">
              <P className="font-medium">Switch</P>
              <Switch checked={switchValue} onCheckedChange={setSwitchValue} />
            </View>

            <View className="flex-row items-center gap-2">
              <Checkbox checked={checkboxValue} onCheckedChange={setCheckboxValue} />
              <P>Checkbox option</P>
            </View>
          </CardContent>
        </Card>

        {/* Progress and Feedback */}
        <Card>
          <CardHeader>
            <H2>Progress & Feedback</H2>
            <CardDescription>Progress indicators and user feedback</CardDescription>
          </CardHeader>
          <CardContent className="gap-4">
            <View className="gap-2">
              <P className="font-medium">Progress: {progress}%</P>
              <Progress value={progress} className="w-full" />
              <View className="flex-row gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onPress={() => setProgress(Math.max(0, progress - 10))}>
                  <Text>-</Text>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onPress={() => setProgress(Math.min(100, progress + 10))}>
                  <Text>+</Text>
                </Button>
              </View>
            </View>

            <Alert icon={Check}>
              <AlertTitle>Success!</AlertTitle>
              <AlertDescription>Your changes have been saved successfully.</AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Typography Showcase */}
        <Card>
          <CardHeader>
            <H2>Typography</H2>
            <CardDescription>Various text styles and formatting options</CardDescription>
          </CardHeader>
          <CardContent className="gap-4">
            <View className="gap-2">
              <H1>Heading 1</H1>
              <H2>Heading 2</H2>
              <H3>Heading 3</H3>
              <P>This is a regular paragraph with normal text styling.</P>
              <Muted>This is muted text for less important information.</Muted>
              <Code>const example = "code snippet";</Code>
            </View>
          </CardContent>
        </Card>

        {/* Badges and Status */}
        <Card>
          <CardHeader>
            <H2>Badges & Status</H2>
            <CardDescription>Show status, categories, and labels</CardDescription>
          </CardHeader>
          <CardContent>
            <View className="gap-4">
              <View className="flex-row flex-wrap gap-2">
                <Badge variant="default">
                  <Text className="text-primary-foreground">Default</Text>
                </Badge>
                <Badge variant="secondary">
                  <Text>Secondary</Text>
                </Badge>
                <Badge variant="outline">
                  <Text>Outline</Text>
                </Badge>
                <Badge variant="destructive">
                  <Text className="text-destructive-foreground">Destructive</Text>
                </Badge>
              </View>

              <Separator />

              <View className="flex-row items-center gap-3">
                <Avatar alt="User Avatar">
                  <AvatarFallback>
                    <Text>JD</Text>
                  </AvatarFallback>
                </Avatar>
                <View className="flex-1">
                  <P className="font-medium">John Doe</P>
                  <Muted>john.doe@example.com</Muted>
                </View>
                <Badge variant="secondary">
                  <Text>Active</Text>
                </Badge>
              </View>
            </View>
          </CardContent>
        </Card>

        {/* Accordion Demo */}
        <Card>
          <CardHeader>
            <H2>Collapsible Content</H2>
            <CardDescription>Accordion and expandable sections</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <Text>What is React Native?</Text>
                </AccordionTrigger>
                <AccordionContent>
                  <P>
                    React Native is a framework for building mobile applications using React and
                    JavaScript. It allows you to build native mobile apps for iOS and Android using
                    the same codebase.
                  </P>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <Text>How does Expo help?</Text>
                </AccordionTrigger>
                <AccordionContent>
                  <P>
                    Expo provides a set of tools and services that make React Native development
                    easier. It includes a development environment, build tools, and various APIs for
                    common mobile features.
                  </P>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  <Text>What about styling?</Text>
                </AccordionTrigger>
                <AccordionContent>
                  <P>
                    This project uses NativeWind for styling, which brings Tailwind CSS to React
                    Native. Combined with the UI component library, you get a complete design
                    system.
                  </P>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Loading States */}
        <Card>
          <CardHeader>
            <H2>Loading States</H2>
            <CardDescription>Skeleton loaders and placeholders</CardDescription>
          </CardHeader>
          <CardContent className="gap-4">
            <View className="gap-3">
              <View className="flex-row items-center gap-3">
                <Skeleton className="h-12 w-12 rounded-full" />
                <View className="flex-1 gap-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-3 w-32" />
                </View>
              </View>

              <Skeleton className="h-24 w-full" />

              <View className="gap-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </View>
            </View>
          </CardContent>
        </Card>

        {/* Component Status */}
        <Card>
          <CardHeader>
            <H2>Component Library Status</H2>
            <CardDescription>Available components in your project</CardDescription>
          </CardHeader>
          <CardContent className="gap-3">
            <View className="gap-2">
              <P className="font-medium">✅ Basic Components</P>
              <Muted>Button, Card, Input, Text, Badge</Muted>
            </View>

            <View className="gap-2">
              <P className="font-medium">✅ Form Components</P>
              <Muted>Checkbox, Switch, Select, Textarea, Radio</Muted>
            </View>

            <View className="gap-2">
              <P className="font-medium">✅ Layout Components</P>
              <Muted>Separator, Tabs, Accordion, Dialog</Muted>
            </View>

            <View className="gap-2">
              <P className="font-medium">✅ Feedback Components</P>
              <Muted>Alert, Progress, Skeleton, Tooltip</Muted>
            </View>

            <View className="gap-2">
              <P className="font-medium">✅ Navigation Components</P>
              <Muted>Menu, Dropdown, Navigation Menu</Muted>
            </View>
          </CardContent>
        </Card>
      </ScrollView>
    </Card>
  );
}
