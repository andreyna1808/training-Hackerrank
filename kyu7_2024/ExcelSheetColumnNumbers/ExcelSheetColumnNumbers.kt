// There isn't one for this language, but I practiced logic the same way

//  Excel sheet column numbers

object Kata {
    fun titleToNumber(title: String): Int {
          val alphabetLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          
          var resultValue = 0;
          for (letter in title) {
            val letterValue = alphabetLetters.indexOf(letter) + 1

            println("$letterValue $letter")
            resultValue = resultValue * 26 + letterValue;
            println(letter)
        }
  
          return resultValue
        
    }
  }

  fun main() {
    val result = Kata.titleToNumber("AA") 
    println(result)
}