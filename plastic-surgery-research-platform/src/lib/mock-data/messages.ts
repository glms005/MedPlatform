import type { Conversation, Message } from "@/types/domain";

/** Placeholder messaging data — Realtime not connected in MVP. */
export const conversations: Conversation[] = [
  {
    id: "conv1",
    type: "direct",
    participantIds: ["u1", "u2"],
    title: null,
    createdAt: "2025-04-01T10:00:00Z",
  },
  {
    id: "conv2",
    type: "group",
    participantIds: ["u1", "u2", "u3"],
    title: "Rhinoplasty recovery — week 2 (fictional)",
    createdAt: "2025-04-05T14:00:00Z",
  },
];

export const messages: Message[] = [
  {
    id: "m1",
    conversationId: "conv1",
    senderId: "u2",
    content: "Thanks for sharing your swelling log — helped me set expectations.",
    media: [],
    createdAt: "2025-04-02T09:00:00Z",
  },
  {
    id: "m2",
    conversationId: "conv2",
    senderId: "u3",
    content: "Reminder: not medical advice. Follow your own clinician's plan.",
    media: [],
    createdAt: "2025-04-06T08:30:00Z",
  },
];

export function getConversations(): Conversation[] {
  return conversations;
}
