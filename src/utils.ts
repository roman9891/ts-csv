export const dateStringToDate = (dateString: string): Date => {
    const dateParts = dateString
        .split('/')
        .map((datePart) => parseInt(datePart))

    const [ month, day, year ] = dateParts

    return new Date(year, month - 1, day)
}