// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/solutions/kotlin

// Beginner Series #2 Clock

fun past(h: Int, m: Int, s: Int): Int {
    val sumMilliSeconds = (h * 60 * 60 * 1000) + (m * 60 * 1000) + (s * 1000)
    return sumMilliSeconds
}

  fun main() {
    val result = past(0, 1, 1)
    println(result)
}