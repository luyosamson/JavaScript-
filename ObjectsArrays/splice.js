const languages=['Go','JavaScript','Python','Ruby','Java']
languages.splice(3,0,"C++","C",'PHP')
console.log(languages)
 languages.forEach(function(x,i){
    console.log(`The programming language ${x} is on index ${i+1}`)

 })
