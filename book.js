function book01(money){
    return money>=200?"實體書":"電子書";
}

function book02(money){
    return money>=1000?"精裝寫真書":"平裝寫真書";
}

module.exports={
    book01,book02
}
