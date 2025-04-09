/**
 * Μια διαφορά TS με JS είναι ο τύπος, εδώ string
 * Επίσης πρέπει να πούμε ότι αυτό που θα επιστρέψει
 * είναι και αυτό τύπου string (προαιρετικό)
 */
export function greet(name: string): string {
  return `Hello ${name}`
}