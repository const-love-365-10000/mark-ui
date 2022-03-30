export function getType(target){
    return Object.prototype.toString.call(target).slice(8)
}

export function isObject(obj) {
    return getType(obj) === 'Object'
}