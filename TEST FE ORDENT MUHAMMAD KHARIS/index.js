// soal
const arr1 = [
  ['J','L','L','M'],
  ['u','i','i','a'],
  ['s','v','f','n'],
  ['t','e','e','']
]

const arr2 = [ 
  [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
  [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
  [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
  [ '', 'o', '', '', 'e', '', '', 'l' ],
  [ '', 'c', '', '', 'r', '', '', '' ],
  [ '', 'h', '', '', 'h', '', '', '' ],
  [ '', 'o', '', '', 'o', '', '', '' ],
  [ '', 'n', '', '', 'u', '', '', '' ],
  [ '', 'd', '', '', 's', '', '', '' ],
  [ '', 'r', '', '', 'e', '', '', '' ],
  [ '', 'i', '', '', '', '', '', '' ],
  [ '', 'a', '', '', '', '', '', '' ]
]

let data = []
let text = []
function arrAdder(arr) {
    data = []
    arr.forEach((el, i) => {
        el.forEach((dt, i) => {
            data.push([])
            if (dt !== '') {
                data[i].push(dt)
            }
        })
    });
    data.forEach((el, i) => {
        text.push(el)
        text.push([])
    })
    let str = text.toString().replaceAll(',,',' ')
    str = str.replaceAll(',','')
    console.log(`"${str.trim()}"`)
}

arrAdder(arr2)