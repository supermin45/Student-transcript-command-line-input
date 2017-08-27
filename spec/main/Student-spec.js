/**
 * Created by Administrator on 2017/8/26.
 */
'use strict'
const  Student = require("../../main/student.js")
const addStudent = require("../../main/addStudent.js");

describe('student', () => {
    const studentStr = `Sara,1701,1班,数学:98,英语:99,语文:89`;
    const errorStudentStr = `Sara,1702,1班,汉族,数学:98,英语,100,语文:89`;

    it('returns the studentInfo when given the student string is correct', () => {
        let result = addStudent(studentStr);
        let student = new Student("Sara", "1701", "1班",[{course:"数学", score:98}, {course:"英语",score:99}, {course:"语文",score:89}]);
        expect(student).toEqual(result);
    });

    it('returns -1 when given the student string format is wrong', () => {
        let result = addStudent(errorStudentStr);
        expect(-1).toEqual(result);
    });
});