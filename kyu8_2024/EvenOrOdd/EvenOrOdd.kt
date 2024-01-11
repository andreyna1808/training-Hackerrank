// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/kotlin

// Even or Odd

fun evenOrOdd(number: Int): String {
    val isEvenOrOdd = if (number % 2 == 0) "Even" else "Odd"
    return isEvenOrOdd;  
}

fun main() {
    val result = evenOrOdd(12)
    println(result)
}