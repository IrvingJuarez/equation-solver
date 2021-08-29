const regex = /([\w\-\+]*|\([^\=]*\))\s?\/\s?(\([^\=]*\)|[\w\-\+]*)/g

const interpreter = (str) => {
    let matches = []
    var values

    if(str == ""){
        return "."
    }

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