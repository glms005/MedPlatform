import { redirect } from "next/navigation";

type Props = { params: Promise<{ threadId: string }> };

export default async function CommunityThreadRedirect({ params }: Props) {
  const { threadId } = await params;
  redirect(`/forum/${threadId}`);
}
