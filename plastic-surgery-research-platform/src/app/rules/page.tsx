import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { Card } from "@/components/ui/Card";
import { MedicalDisclaimer } from "@/components/shared/MedicalDisclaimer";
import { communityRules, reportReasons } from "@/lib/community-rules";

export default function RulesPage() {
  return (
    <div className="min-h-screen bg-brand-ivory py-12 sm:py-16">
      <Container>
        <PageHeader
          title="Community rules"
          description="Everyone using MedPlatform agrees to these standards. Violations may result in content removal or account restrictions when moderation is live."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {communityRules.map((rule) => (
            <Card key={rule.id} className="p-6">
              <h2 className="font-display text-lg font-semibold text-brand-ink">{rule.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">{rule.body}</p>
            </Card>
          ))}
        </div>
        <Card className="mt-10 p-6">
          <h2 className="font-display text-xl font-semibold">Reporting</h2>
          <p className="mt-2 text-sm text-brand-muted">
            You can report reviews, forum posts, comments, users, and private messages (when
            messaging launches). Reasons include:
          </p>
          <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-brand-muted">
            {reportReasons.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </Card>
        <Card className="mt-6 border-brand-blue/20 p-6 ring-1 ring-brand-blue/15">
          <MedicalDisclaimer />
        </Card>
      </Container>
    </div>
  );
}
