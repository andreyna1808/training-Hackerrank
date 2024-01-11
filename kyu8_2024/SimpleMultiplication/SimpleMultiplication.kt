// https://www.codewars.com/kata/583710ccaa6717322c000105/train/kotlin

// Simple multiplication

fun simpleMultiplication(num: Int): Int {
    val resultMutiplication = if (num % 2 == 0) num * 8 else num * 9
    return resultMutiplication
}

fun main() {
    val result = simpleMultiplication(12)
    println(result)
}