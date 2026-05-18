import type { User } from "@/types/domain";

export const users: User[] = [
  {
    id: "u1",
    displayName: "ResearchPatient_47",
    anonymousName: null,
    phoneVerified: true,
    language: "en",
    role: "member",
    createdAt: "2024-01-15T10:00:00Z",
  },
  {
    id: "u2",
    displayName: "Anonymous",
    anonymousName: "HealingNotebook",
    phoneVerified: false,
    language: "ka",
    role: "member",
    createdAt: "2024-03-02T08:00:00Z",
  },
  {
    id: "u3",
    displayName: "BatumiTraveler",
    anonymousName: null,
    phoneVerified: true,
    language: "en",
    role: "member",
    createdAt: "2024-05-20T12:00:00Z",
  },
  {
    id: "u-mod",
    displayName: "Platform Moderator",
    anonymousName: null,
    phoneVerified: true,
    language: "en",
    role: "moderator",
    createdAt: "2023-11-01T09:00:00Z",
  },
];

export function getUserById(id: string): User | undefined {
  return users.find((u) => u.id === id);
}
