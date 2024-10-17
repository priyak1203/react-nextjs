import { Separator } from '@/components/ui/separator';

function SectionTitle({ text }: { text: string }) {
  return (
    <div>
      <h2 className="text-3xl capitalize font-medium tracking-wider mb-8">
        {text}
      </h2>
      <Separator />
    </div>
  );
}

export default SectionTitle;
