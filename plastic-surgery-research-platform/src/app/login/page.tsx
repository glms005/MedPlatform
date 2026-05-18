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
            description="Verify your Georgian mobile number with a one-time code. Sessions stay on this device until you sign out."
          />
          <LoginForm />
        </div>
      </Container>
    </div>
  );
}
