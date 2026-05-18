import { Card } from "@/components/ui/Card";
import { VoteControls } from "@/components/shared/VoteControls";
import { ReportButton } from "@/components/shared/ReportButton";
import type { ForumComment } from "@/types/domain";

export function ForumCommentCard({ comment }: { comment: ForumComment }) {
  return (
    <Card className="p-4">
      <div className="flex gap-3">
        <VoteControls upvotes={comment.upvotes} downvotes={comment.downvotes} compact />
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold text-brand-ink">
            {comment.author}{" "}
            <span className="font-normal text-brand-muted">
              · {new Date(comment.createdAt).toLocaleString()}
            </span>
          </p>
          <p className="mt-2 text-sm leading-relaxed text-brand-muted">{comment.content}</p>
          <div className="mt-2">
            <ReportButton targetType="comment" targetId={comment.id} />
          </div>
        </div>
      </div>
    </Card>
  );
}
