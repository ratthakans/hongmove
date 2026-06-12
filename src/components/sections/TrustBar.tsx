import { trustPoints } from "@/lib/site";
import { Shield } from "@/components/ui/Icons";

export function TrustBar() {
  return (
    <div className="border-b border-line bg-white">
      <div className="container-x flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5 md:justify-between">
        {trustPoints.map((t) => (
          <div key={t} className="flex items-center gap-2 text-sm font-medium text-ink/75">
            <Shield className="h-4 w-4 text-crimson" />
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}
