import { Container } from "@/components/ui/Container";
import { ReviewForm } from "./ReviewForm";

export default function NewReviewPage() {
  return (
    <div className="min-h-screen bg-brand-ivory py-12 sm:py-16">
      <Container>
        <header className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-blue">
            Contribute
          </p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-brand-ink sm:text-4xl">
            Structured review (mock)
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-brand-muted">
            This form demonstrates PRD fields. Submissions are not stored. Future versions
            will include moderation and identity checks.
          </p>
        </header>
        <div className="mx-auto max-w-2xl">
          <ReviewForm />
        </div>
      </Container>
    </div>
  );
}
