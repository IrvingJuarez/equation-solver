const getMatch = (string) => {
    let regExp = /[\-]?[\d{1,}]?[\w]?[\+\-\*]?[\d{1,1}]?[\-\+\*]?[\d{1,}]?[\(]?\d*[\(\)]?[\d{1,}]?[\(\)]?\w?[\+\-\*]?\d*\s?\/\s?\d?[\-\.]?\d+[\s\+\-\*]{1,1}/g;

    if(string.length <= 1){
        arr = []
        i = 0
    }

    if(arr.length >= 1){
        string = string.substring(arr[0].length - (73 * i))
    }
    
    let result
    let myMatch = string.match(regExp)

    if(myMatch){
        let numbers, subresult
        i++
        if(arr.length >= 1){
            numbers = myMatch[0].split("/")
            subresult = string.replace(regExp, div(...numbers))
            result = `${arr[0]}${subresult}`
            arr[0] = result
        }else{
            numbers = myMatch[0].split("/")
            result = string.replace(regExp, div(...numbers))
            arr[0] = result
        }
    }else{
        if(arr.length >= 1){
            result = `${arr[0]}${string}`
        }else{
            result = string
        }
    }

    return result
}

const interpreter = (str) => {
    let regex = /([\w\-\+]*|\([\w\-\+\s]*\))\s?\/\s?(\([\w\-\+\s]*\)|[\w\-\+]*)/g;
    let matches = []
    var values

    return str.replaceAll(regex, e => {
        matches.push(e)

        matches.map( match => {
            values = match.split("/")
        })

        return (`
            <div>
                <p>${values[0]}</p>
                <hr />
                <p>${values[1]}</p>
            </div>
        `)

    })
}

export default interpreter