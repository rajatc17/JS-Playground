let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop()
secretMessage.push('to','Program')
console.log(secretMessage)
secretMessage[secretMessage.indexOf('easily')]='right'
console.log(secretMessage)
secretMessage.shift()
secretMessage.unshift('Programming')
console.log(secretMessage)
secretMessage.splice(secretMessage.indexOf('right')-1,5,'know,')
console.log(secretMessage.join(' '))