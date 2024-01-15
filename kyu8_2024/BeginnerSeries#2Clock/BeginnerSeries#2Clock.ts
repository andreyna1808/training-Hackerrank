// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/typescript

// Beginner Series #2 Clock

export function past(h: number, m: number, s: number): number {
    const sumMilliSeconds = (h * 60 * 60 * 1000) + (m * 60 * 1000) + (s * 1000)    
    return sumMilliSeconds
}
  