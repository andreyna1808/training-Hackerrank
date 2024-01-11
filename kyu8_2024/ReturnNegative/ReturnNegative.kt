// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/kotlin

// Return Negative

// Se fosse um Object rle daria para fazer direto Kata.makeNegative
// Sem precisar, mas como é uma classe. Precisa instanciar
class Kata {
    fun makeNegative(num: Int): Int {
        val convertToNegative = if (num <= 0) num else -num
        return convertToNegative
    }
}

fun main() {
    val kata = Kata() // Cria uma instância da classe Kata
    val result = kata.makeNegative(12) // Chama o método makeNegative na instância criada
    println(result)
}