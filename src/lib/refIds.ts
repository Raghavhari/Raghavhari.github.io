export function ordinalFromEnd(index: number, total: number, padWidth = 3) {
  return String(total - index).padStart(padWidth, "0");
}
