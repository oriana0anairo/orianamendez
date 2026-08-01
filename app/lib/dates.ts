import type { IsoDate } from "@/app/data/types";

const LOCALE = "es-ES";

/** Interpreta `YYYY-MM` o `YYYY-MM-DD` como fecha local, sin desfase de zona horaria. */
function parseIsoDate(value: IsoDate): Date | null {
  const [year, month, day] = value.split("-").map(Number);

  if (!year || !month) return null;

  return new Date(year, month - 1, day ?? 1);
}

/** "2026-02-11" → "11 de febrero de 2026". */
export function formatFullDate(value: IsoDate): string {
  const date = parseIsoDate(value);

  if (!date) return value;

  return new Intl.DateTimeFormat(LOCALE, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

/** "2026-02" → "feb 2026". */
export function formatMonthAndYear(value: IsoDate): string {
  const date = parseIsoDate(value);

  if (!date) return value;

  return new Intl.DateTimeFormat(LOCALE, {
    month: "short",
    year: "numeric",
  }).format(date);
}

/** Rango de un puesto de trabajo; sin `endDate` se considera vigente. */
export function formatDateRange(start: IsoDate, end?: IsoDate): string {
  const endLabel = end ? formatMonthAndYear(end) : "Actualidad";

  return `${formatMonthAndYear(start)} — ${endLabel}`;
}
