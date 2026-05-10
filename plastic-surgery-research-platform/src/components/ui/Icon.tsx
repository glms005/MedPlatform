export function Icon({
  variant,
}: {
  variant:
    | "search"
    | "shield"
    | "warning"
    | "compare"
    | "steps"
    | "profile"
    | "guide"
    | "gallery";
}) {
  const common = "h-5 w-5 text-brand-accentDark";
  switch (variant) {
    case "search":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M16.5 16.5 21 21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "shield":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2 20 6v7c0 5-3.5 9.4-8 9.9C7.5 22.4 4 18 4 13V6l8-4Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="m9.5 12 1.7 1.7 3.8-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "warning":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 9v5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 17h.01"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M10.3 4.6 2.7 18a2 2 0 0 0 1.7 3h15.2a2 2 0 0 0 1.7-3L13.7 4.6a2 2 0 0 0-3.4 0Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "compare":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M10 4h10M10 12h10M10 20h10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 6h2M4 14h2M4 22h2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "steps":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M7 7h10M7 12h10M7 17h10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 7h.01M4 12h.01M4 17h.01"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      );
    case "profile":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M20 21a8 8 0 1 0-16 0"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      );
    case "guide":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M7 4h12v15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M9 8h8M9 12h8M9 16h6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "gallery":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="m8 14 2-2 3 3 2-2 3 3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 9h.01"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

