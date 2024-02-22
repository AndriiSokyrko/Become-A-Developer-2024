let rootDoc = document.getElementById('root')

let maxNumber = array => array.reduce((acc, cur) => acc < +cur ? cur : acc, 0)
let minNumber = array => array.reduce((acc, cur) => acc > +cur ? cur : acc, 0)
let sortArray = array => array.sort((a, b) => a - b)
let mediana = array => {
    console.log(array[array.length / 2]+'======' + array[(array.length / 2)+1])
    return 0.5 * (+array[array.length / 2] + (+array[(array.length / 2) + 1]))
}
let avarage = array => array.reduce((acc, cur) => acc + (+cur), 0) / array.length

let accentNumberConsequence = [0]
let accentConsequence = array => {
    return array.reduce((acc, cur) => {
        if (acc[acc.length - 1] < +cur) {
            if (accentNumberConsequence.length < acc.length) accentNumberConsequence = [...acc, +cur];
            return [...acc, +cur]
        } else {
            return [+cur]
        }
    }, 0)
}

let discentNumberConsequence = [0]
let disccentConsequence = array => {
    return array.reduce((acc, cur) => {
        if (acc[acc.length - 1] > +cur) {
            if (discentNumberConsequence.length < acc.length) discentNumberConsequence = [...acc, +cur];
            return [...acc, +cur]
        } else {
            return [+cur]
        }
    }, 0)
}

import   res from './10m.txt';
let arrayStrokes = res.split('\n')
    const paragraphElementMax = document.createElement("div");
    paragraphElementMax.innerText = 'MaxNumber ' + maxNumber(arrayStrokes)
    rootDoc.append(paragraphElementMax)
        console.log('maxNumber ' + maxNumber(arrayStrokes))

const paragraphElementMin = document.createElement("div");
paragraphElementMin.innerText = 'MinNumber ' + minNumber(arrayStrokes)
rootDoc.append(paragraphElementMin)
        console.log('MinNumber ' + minNumber(arrayStrokes))

        let medianaNumber = mediana(arrayStrokes)
        console.log('medianaNumber ' + medianaNumber)
const paragraphElementMediana = document.createElement("div");
paragraphElementMediana.innerText = 'MedianaNumber ' + medianaNumber
rootDoc.append(paragraphElementMediana)


const paragraphElementavarage = document.createElement("div");
paragraphElementavarage.innerText = 'avarage ' + avarage(arrayStrokes)
rootDoc.append(paragraphElementavarage)
        console.log('avarage ' + avarage(arrayStrokes))

        accentConsequence(arrayStrokes)
        console.log('accentNumberConsequence ' + accentNumberConsequence)
const paragraphElementaccentConsequence = document.createElement("div");
paragraphElementaccentConsequence.innerText = 'accentNumberConsequence ' + accentNumberConsequence
rootDoc.append(paragraphElementaccentConsequence)

        disccentConsequence(arrayStrokes)
        console.log('discentNumberConsequence ' + discentNumberConsequence)

const paragraphElementdisccentConsequence = document.createElement("div");
paragraphElementdisccentConsequence.innerText = 'discentNumberConsequence ' + discentNumberConsequence
rootDoc.append(paragraphElementdisccentConsequence)
