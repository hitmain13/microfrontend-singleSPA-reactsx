const formatCurrency = (value: string) => {
    value = value
        .replace('.', '')
        .replace(',', '')
        .replace(/\D/g, '')
    const options = { minimumFractionDigits: 2 }
    const result = new Intl.NumberFormat('pt-BR', options)
        .format(parseFloat(value) / 100)
    return 'R$ ' + result
}

export const unformatCurrency = (value: string) => {
    const removeSign = value.replace('R$', '')
    const removeDot = removeSign.replace('.', '')
    const replaceComma = removeDot.replace(',', '.')
    const toNumber = Number(replaceComma)*10
    const finalResult = String(toNumber.toFixed(2))
    return finalResult
}

export default formatCurrency