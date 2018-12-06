const fs = require('fs');

function math(match, a, b) {
    return parseInt(a) + parseInt(b)
}

function efficient(data) {
    if (data.indexOf("\n")==-1) {
        return data
    }
    lessData = data.replace(/([-+]?\d+)\n([-+]?\d+)/, math)
    return efficient(lessData)
}

fs.readFile('day-1.data', 'utf8', (err, data) => {
    if (err) throw err;
    answer = efficient(data)
    console.log(answer)
});