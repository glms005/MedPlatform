import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { LoginForm } from "./LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-brand-ivory py-12 sm:py-16">
      <Container>
        <div className="mx-auto max-w-md">
          <PageHeader
            title="Sign in"
            description="Phone verification UI mockup. Real OTP via Supabase Auth is planned for Phase 1."
          />
          <LoginForm />
        </div>
      </Container>
    </div>
  );
}
