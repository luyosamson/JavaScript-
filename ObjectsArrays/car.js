function Car(make,model,year){
    this.make=make,
    this.moel=model,
    this.year=year,
    this.getCarInfo=function(){
        console.log(`Make ${this.make} of model ${this.model} of the year ${this.year}`)
    }
}

car1=new Car("Hyundai","HY009",2022)
car2=new Car("Vitz","V09",20223)
car1.getCarInfo()
car2.getCarInfo()
