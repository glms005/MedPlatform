/** Normalize to E.164-style digits for Georgia (+995). */
export function normalizePhone(input: string): string | null {
  const digits = input.replace(/\D/g, "");
  if (digits.startsWith("995") && digits.length === 12) {
    return `+${digits}`;
  }
  if (digits.startsWith("5") && digits.length === 9) {
    return `+995${digits}`;
  }
  if (digits.length === 12 && digits.startsWith("9955")) {
    return `+${digits}`;
  }
  return null;
}

export function isValidGeorgianMobile(phone: string): boolean {
  return /^\+9955\d{8}$/.test(phone);
}

export function maskPhone(phone: string): string {
  if (phone.length < 8) return phone;
  return `${phone.slice(0, 7)} *** ** ${phone.slice(-2)}`;
}
