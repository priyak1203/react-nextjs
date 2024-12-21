import { Button } from '@/components/ui/button';
import { Camera } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="h-screen flex justify-center items-center gap-8">
      <Button>Default Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button size="icon" variant="outline">
        <Camera />
      </Button>
    </div>
  );
}
