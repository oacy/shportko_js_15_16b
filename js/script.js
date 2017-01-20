'use strict';

function Human(name, age, sex, height, weight) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.height = height;
    this.weight = weight;
};

function Worker(place_of_work, salary) {
    Human.apply(this, ["Вася", 36, "М", "176", "70"]),
        this.place_of_work = place_of_work,
        this.salary = salary,
        this.position = function () {
            console.log("работать");
        };

}

var worker1 = new Worker("завод", "монтажник");
console.log(worker1);


function Student(place_of_study, grant) {
    Human.apply(this, ["Петя", 20, "М", "180", "80"]),
        this.place_of_study = place_of_study,
        this.grant = grant,
        this.position = function () {
            console.log("смотреть сериалы");
        };

}

var student1 = new Student("Университет", "5000");
console.log(student1);



