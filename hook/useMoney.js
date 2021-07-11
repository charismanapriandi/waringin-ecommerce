const useMoney = (number) => {
    let format = number?.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
    let money = 'Rp ' + format
    return money
}

export default useMoney