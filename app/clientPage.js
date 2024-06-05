import { Input } from "@/components/ui/input";

export default function ClientPage() {
  return (
    <div className="text-3xl flex flex-col items-center">
      <Input type="file" className="w-1/2 bg-background text-3xl" />
    </div>
  );
}
