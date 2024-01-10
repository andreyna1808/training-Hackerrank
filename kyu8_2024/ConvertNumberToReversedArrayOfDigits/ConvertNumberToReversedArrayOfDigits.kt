// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/kotlin

// Convert number to reversed array of digits

object Kata {
    fun digitize(n:Long):IntArray {
          val arrayStringValues = n.toString().reversed()
          val changeToNumber = arrayStringValues.map { char -> char.digitToInt() }.toIntArray()
  
          return changeToNumber
        
    }
  }

  fun main() {
    val result = Kata.digitize(35231) // Code exemplo
    println(result.contentToString())
}