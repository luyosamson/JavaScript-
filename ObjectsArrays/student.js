const student={
    name:"Samson",
    age:27,
    school:{name:"Multimedia University Of kenya",est:1997,population:2000,County:"Nairobi"},
    yob:"17/09/1998",
    bio:function(){
        return this.name +''+this.yob
    }
}
student.country="Uganda"
console.log(student.country)
student.country="Tz"
console.log(student)
