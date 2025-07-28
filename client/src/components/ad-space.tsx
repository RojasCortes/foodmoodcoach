import { Card, CardContent } from "@/components/ui/card";

interface AdSpaceProps {
  size: 'banner' | 'large';
}

export default function AdSpace({ size }: AdSpaceProps) {
  const dimensions = size === 'banner' ? '320x100' : '320x150';
  const height = size === 'banner' ? 'h-20' : 'h-28';

  return (
    <Card className={`bg-slate-100 border-2 border-dashed border-slate-300 ${height}`}>
      <CardContent className="h-full flex flex-col items-center justify-center text-center p-4">
        <div className="text-slate-400 text-2xl mb-2">📢</div>
        <p className="text-slate-500 text-sm font-medium">Espacio publicitario</p>
        <p className="text-xs text-slate-400">{dimensions} banner</p>
      </CardContent>
    </Card>
  );
}
