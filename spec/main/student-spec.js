'use strict';
const getStudent = require('../../main/getStudent');
const Student = require('../../main/Student');

describe('student', () => {
    const studentStr = `acey,110,汉族,数学:100,英语:100,语文:100`;
    const errorStudentStr = `acey,110,汉族,数学:100,英语:100,语文:100`;

    it('return Student when given student String ,the format is correct', () => {
        let result = getStudent(studentStr);
        let student = new Student("acey", "110", "汉族", [{"course":"数学", "score":100}, {"course":"英语","score":100}, {"course":"语文","score":100}]);
        expect(result).toEqual(student);
    });

    it('return Student when given student String ,wrong format', () => {
        let result = getStudent(errorStudentStr);
        let student = new Student("acey", "110", "汉族", [{"course":"数学", "score":100}, {"course":"英语","score":100}, {"course":"语文","score":100}]);
        expect(result).toEqual(student);
    });
});
