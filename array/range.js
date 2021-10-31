function *range(start, end, callback) {
    for (let i = start; i <= end; i++) {
        if(typeof callback === 'function') {
            yield callback(i)
        } else {
            yield i * 2
        }
    }
}


[...range(4,9)];

Array.from(range(5,7, (i)=>{
    return i ** 2
}));