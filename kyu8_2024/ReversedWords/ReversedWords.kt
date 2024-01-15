// https://www.codewars.com/kata/51c8991dee245d7ddf00000e/train/kotlin

// Reversed Words

object Reverse {
    fun reverseWords(str: String): String {
        return str.split(" ").reversed().joinToString(" ")
    }
}

fun main() {
    val result = Reverse.reverseWords("boa vida uma viva 3 2 1")
    println(result)
}
