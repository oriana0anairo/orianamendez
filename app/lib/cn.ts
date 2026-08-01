type ClassValue = string | false | null | undefined;

/** Une clases de CSS descartando los valores condicionales vacíos. */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
