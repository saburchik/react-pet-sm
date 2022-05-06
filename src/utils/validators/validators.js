export const required = value => {
    if (value) return undefined
    return 'Field is required'
}

export const maxLengthCreator = (maxLength) => {
    return (value) => {
        if (value.length > maxLength) {
            return `Max length greater than ${maxLength} symbols`
        }
        return undefined
    }
}

export const valueEmpty = (value) => {
    if (value === '') return 'Field is empty'
    return undefined
}