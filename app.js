let user = {
  age: 0, 
  setAge: function(newAge) {
    this.age = newAge;
  },
  getYearsBeforeRetirement: function() {
    let retirementAge = 65; // Pensiya yaşı mellim dedi 65 gotur
    let yearsLeft = retirementAge - this.age;
    
 if (yearsLeft > 0) {
      return yearsLeft;
    } else {
      return 0;
    }
  }
};

user.setAge(30); 

console.log(user.getYearsBeforeRetirement()); 
