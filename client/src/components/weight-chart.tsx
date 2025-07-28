import { useEffect, useRef } from 'react';
import type { WeightEntry } from '@shared/schema';

interface WeightChartProps {
  entries: WeightEntry[];
}

export default function WeightChart({ entries }: WeightChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || entries.length === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    // Clear canvas
    ctx.clearRect(0, 0, rect.width, rect.height);

    // Sort entries by date
    const sortedEntries = [...entries].sort((a, b) => 
      new Date(a.recordedAt!).getTime() - new Date(b.recordedAt!).getTime()
    );

    if (sortedEntries.length < 2) {
      // Show placeholder text
      ctx.fillStyle = '#64748b';
      ctx.font = '14px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Necesitas al menos 2 registros', rect.width / 2, rect.height / 2);
      return;
    }

    // Chart dimensions
    const padding = 40;
    const chartWidth = rect.width - padding * 2;
    const chartHeight = rect.height - padding * 2;

    // Find min and max weights
    const weights = sortedEntries.map(e => e.weight);
    const minWeight = Math.min(...weights);
    const maxWeight = Math.max(...weights);
    const weightRange = maxWeight - minWeight || 1; // Prevent division by zero

    // Calculate points
    const points = sortedEntries.map((entry, index) => ({
      x: padding + (index / (sortedEntries.length - 1)) * chartWidth,
      y: padding + chartHeight - ((entry.weight - minWeight) / weightRange) * chartHeight,
      weight: entry.weight
    }));

    // Draw grid lines
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 1;
    
    // Horizontal grid lines
    for (let i = 0; i <= 4; i++) {
      const y = padding + (i / 4) * chartHeight;
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(padding + chartWidth, y);
      ctx.stroke();
    }

    // Draw line
    ctx.strokeStyle = '#10B981';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    ctx.beginPath();
    points.forEach((point, index) => {
      if (index === 0) {
        ctx.moveTo(point.x, point.y);
      } else {
        ctx.lineTo(point.x, point.y);
      }
    });
    ctx.stroke();

    // Draw points
    ctx.fillStyle = '#10B981';
    points.forEach(point => {
      ctx.beginPath();
      ctx.arc(point.x, point.y, 4, 0, 2 * Math.PI);
      ctx.fill();
      
      // Draw white border
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();
    });

    // Draw weight labels
    ctx.fillStyle = '#475569';
    ctx.font = '12px Inter, sans-serif';
    ctx.textAlign = 'left';
    
    // Y-axis labels (weights)
    const labelStep = weightRange / 4;
    for (let i = 0; i <= 4; i++) {
      const weight = minWeight + (4 - i) * labelStep;
      const y = padding + (i / 4) * chartHeight;
      ctx.fillText(`${weight.toFixed(1)}kg`, 5, y + 4);
    }

  }, [entries]);

  if (entries.length === 0) {
    return (
      <div className="h-48 bg-slate-50 rounded-lg flex items-center justify-center">
        <div className="text-center text-slate-500">
          <div className="text-3xl mb-2">📈</div>
          <p>Sin datos de peso</p>
          <p className="text-sm">Agrega tu primer registro</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-48 bg-slate-50 rounded-lg relative">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
