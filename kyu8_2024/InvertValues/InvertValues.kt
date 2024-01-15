// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/kotlin

// Invert values
fun invert(arr: IntArray): IntArray {
    val invertArray = arr.map { number -> -number }
    return invertArray.toIntArray()
}

fun main() {
    val result = invert(intArrayOf(-1, 2, 4, -8))
    println(result.contentToString())
}
