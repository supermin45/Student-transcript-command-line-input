/**
 * Created by Administrator on 2017/8/26.
 */
'use strict'
class Student {
   constructor(name, Sno, clazz, subjects) {
      this.name = name;
      this.Sno = Sno;
      this.clazz = clazz;
      this.subjects = subjects;
      this.totalScore = calculateTotalScore(subjects);
      this.averageScore = calculateAverageScore(subjects);
   }
}

function calculateTotalScore(subjects){
   return subjects.reduce((sum, subject) => {
      return sum + subject.score;
   }, 0.00);
}
function calculateAverageScore(subjects) {
   return (calculateTotalScore(subjects) / subjects.length).toFixed(2);
}

module.exports = Student;
