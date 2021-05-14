const ededler = [' ', 'yüz ', 'min ', 'milyon ', 'milyard ']
const teklikler = [
  'bir ',
  'iki ',
  'üç ',
  'dörd ',
  'beş ',
  'altı ',
  'yeddi ',
  'səkkiz ',
  'doqquz '
]
const onluqlar = [
  'on ',
  'iyirmi ',
  'otuz ',
  'qırx ',
  'əlli ',
  'altmış ',
  'yetmiş ',
  'səksən ',
  'doxsan '
]

function ConvertNumbertoWord (number) {
  let str = ''

  if (number === 0) return 'sıfır'

  if (number > 0) {
    if (number < 10) str = str + teklikler[number - 1]
    else if (number >= 10 && number < 100) {
      str =
        str +
        onluqlar[Math.floor(number / 10) - 1] +
        ConvertNumbertoWord(number % 10)
    } else if (number >= 100 && number < 1000) {
      str =
        str +
        ConvertNumbertoWord(Math.floor(number / 100)) +
        ededler[1] +
        ConvertNumbertoWord(number % 100)
    } else if (number >= 1000 && number < 1000000) {
      str =
        str +
        ConvertNumbertoWord(Math.floor(number / 1000)) +
        ededler[2] +
        ConvertNumbertoWord(number % 1000)
    } else if (number >= 1000000 && number < 1000000000) {
      str =
        str +
        ConvertNumbertoWord(Math.floor(number / 1000000)) +
        ededler[3] +
        ConvertNumbertoWord(number % 1000000)
    } else if (number >= 1000000000 && number < 1000000000000) {
      str =
        str +
        ConvertNumbertoWord(Math.floor(number / 1000000000)) +
        ededler[4] +
        ConvertNumbertoWord(number % 1000000000)
    }
  } else if (number < 0) str = 'minus ' + ConvertNumbertoWord(Math.abs(number))

  if (str.startsWith('minus bir yüz')) {
    str.replace('minus bir yüz', 'minus')
  } else if (str.startsWith('minus bir min')) {
    str.replace('minus bir min', 'minus')
  } else if (str.startsWith('bir yüz') || str.startsWith('bir min')) {
    str = str.slice(4)
  }

  return str.replace(/\ssıfır/g, '')
}

console.log(ConvertNumbertoWord(28374))
