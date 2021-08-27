import React from "react"
import Fraction from "../components/Fraction"

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

const interpreter = (string) => {
    let regex = /\d\/\d/g;
    let numbers = []

    // if(string.match(regex)){
    //     let newString = string.split("").reverse().join("")
    //     numbers = [...newString.split(/\s?\/?\s?/, 2)]
    // }

    return string.replaceAll(regex, <Fraction />)
}

export default interpreter