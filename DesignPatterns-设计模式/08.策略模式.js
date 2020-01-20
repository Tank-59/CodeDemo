// 差异化询价

// 对象映射:明确映射关系，又不破坏代码灵活性

// 定义一个询价处理器对象，把询价算法全都收敛到一个对象里去
const priceProcessor = {
    pre(originPrice) {
        if (originPrice >= 100) {
            return originPrice - 20;
        }
        return originPrice * 0.9;
    },
    onSale(originPrice) {
        if (originPrice >= 100) {
            return originPrice - 30;
        }
        return originPrice * 0.8;
    },
    back(originPrice) {
        if (originPrice >= 200) {
            return originPrice - 50;
        }
        return originPrice;
    },
    fresh(originPrice) {
        return originPrice * 0.5;
    },
};

// 使用其中某个询价算法的时候：通过标签名去定位就好
// 询价函数
function askPrice(tag, originPrice) {
    return priceProcessor[tag](originPrice)
}

//这时候如果需要增加一个新人价，只需要给 priceProcessor 新增一个映射关系
priceProcessor.newUser = function (originPrice) {
    if (originPrice >= 100) {
        return originPrice - 50;
    }
    return originPrice;
}
