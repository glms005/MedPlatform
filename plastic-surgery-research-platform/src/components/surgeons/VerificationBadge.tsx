import { Badge } from "@/components/ui/Badge";

export function VerificationBadge({ verified }: { verified: boolean }) {
  return verified ? (
    <Badge tone="success">Verified</Badge>
  ) : (
    <Badge tone="neutral">Unverified</Badge>
  );
}
