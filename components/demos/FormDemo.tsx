import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Text } from '@/components/ui/text';
import { Textarea } from '@/components/ui/textarea';
import { H2, P } from '@/components/ui/typography';
import { Info } from 'lucide-react-native';
import React, { useState } from 'react';
import { View } from 'react-native';

interface FormData {
  name: string;
  email: string;
  message: string;
  newsletter: boolean;
  notifications: boolean;
  category: string;
}

function getCategoryLabel(value: string) {
  switch (value) {
    case 'general':
      return 'General';
    case 'support':
      return 'Support';
    case 'feedback':
      return 'Feedback';
    case 'business':
      return 'Business';
    default:
      return '';
  }
}

export function DemoForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    newsletter: false,
    notifications: true,
    category: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    // Reset after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <Card>
      <CardHeader>
        <H2>Contact Form</H2>
        <CardDescription>A demo form showcasing various input components</CardDescription>
      </CardHeader>
      <CardContent className="gap-4">
        {submitted && (
          <Alert icon={Info}>
            <AlertDescription>Form submitted successfully! (This is just a demo)</AlertDescription>
          </Alert>
        )}

        <View className="gap-2">
          <Label>Name</Label>
          <Input
            placeholder="Enter your name"
            value={formData.name}
            onChangeText={(text) => setFormData((prev) => ({ ...prev, name: text }))}
          />
          <Select
            value={
              formData.category
                ? { value: formData.category, label: getCategoryLabel(formData.category) }
                : undefined
            }
            onValueChange={(option) =>
              setFormData((prev) => ({ ...prev, category: option?.value ?? '' }))
            }>
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="general" label={'General'}>
                General Inquiry
              </SelectItem>
              <SelectItem value="support" label={'Support'}>
                Support
              </SelectItem>
              <SelectItem value="feedback" label={'Feedback'}>
                Feedback
              </SelectItem>
              <SelectItem value="business" label={'Business'}>
                Business
              </SelectItem>
            </SelectContent>
          </Select>
          <Label>Category</Label>
          <Select
            value={
              formData.category
                ? { value: formData.category, label: getCategoryLabel(formData.category) }
                : undefined
            }
            onValueChange={(option) =>
              setFormData((prev) => ({ ...prev, category: option?.value ?? '' }))
            }>
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="general" label={'General'}>
                General Inquiry
              </SelectItem>
              <SelectItem value="support" label={'Support'}>
                Support
              </SelectItem>
              <SelectItem value="feedback" label={'Feedback'}>
                Feedback
              </SelectItem>
              <SelectItem value="business" label={'Business'}>
                Business
              </SelectItem>
            </SelectContent>
          </Select>
        </View>

        <View className="gap-2">
          <Label>Message</Label>
          <Textarea
            placeholder="Enter your message..."
            value={formData.message}
            onChangeText={(text) => setFormData((prev) => ({ ...prev, message: text }))}
          />
        </View>

        <Separator />

        <View className="gap-3">
          <View className="flex-row items-center justify-between">
            <Label>Subscribe to newsletter</Label>
            <Switch
              checked={formData.newsletter}
              onCheckedChange={(checked) =>
                setFormData((prev) => ({ ...prev, newsletter: checked }))
              }
            />
          </View>

          <View className="flex-row items-center gap-2">
            <Checkbox
              checked={formData.notifications}
              onCheckedChange={(checked) =>
                setFormData((prev) => ({ ...prev, notifications: checked }))
              }
            />
            <Label>Enable notifications</Label>
          </View>
        </View>

        <Separator />

        <View className="gap-3">
          <P className="font-medium">Form Status:</P>
          <View className="flex-row flex-wrap gap-2">
            <Badge variant={formData.name ? 'default' : 'outline'}>
              <Text className={formData.name ? 'text-primary-foreground' : ''}>Name</Text>
            </Badge>
            <Badge variant={formData.email ? 'default' : 'outline'}>
              <Text className={formData.email ? 'text-primary-foreground' : ''}>Email</Text>
            </Badge>
            <Badge variant={formData.message ? 'default' : 'outline'}>
              <Text className={formData.message ? 'text-primary-foreground' : ''}>Message</Text>
            </Badge>
            <Badge variant={formData.category ? 'default' : 'outline'}>
              <Text className={formData.category ? 'text-primary-foreground' : ''}>Category</Text>
            </Badge>
          </View>
        </View>

        <Button onPress={handleSubmit} disabled={!isFormValid} className="w-full">
          <Text className="text-primary-foreground">
            {submitted ? 'Submitted!' : 'Submit Form'}
          </Text>
        </Button>
      </CardContent>
    </Card>
  );
}
