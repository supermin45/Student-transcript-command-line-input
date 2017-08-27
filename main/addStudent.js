/**
 * Created by Administrator on 2017/8/27.
 */
'use strict'
let Student = require("./Student");
function addStudent(str) {
    if (judgeInputFormat(str)) {
        let student = formatStudentInfo(str);

        return student;
    }

    return -1;
}

function judgeInputFormat(str) {
    let basicInfo = str.split(',');
    let Sno = basicInfo[1];
    let subjects = basicInfo[3];

    return judgeInputLength(basicInfo) && judgeSno(Sno) && judgeSubjects(subjects);
}
function judgeInputLength(basicInfo) {
    if (basicInfo.length !== 6) {
        return false;
    }
    return true;
}
function judgeSno(Sno) {
    if (Sno.length !== 4) {
        return false;
    }
    return true;
}
function judgeSubjects(subjects) {
    let  results = subjects.split(',');
    results.forEach(a => {
        if (a.split(':').length !== 2) {
            return false;
        }
    });

    return true;
}
function formatStudentInfo(str) {
    let studentInfo = str.split(',');
    let [name, Sno, clazz] = studentInfo.slice(0, 3);
    let courses = studentInfo.slice(3);
    let subjects = [];

    courses.forEach(a => {
        let obj = {};
        let courseInfo = a.split(':');
        obj.course = courseInfo[0];
        obj.score = parseInt(courseInfo[1]);
        subjects.push(obj);
    });

    return new Student(name, Sno, clazz, subjects);
}
module.exports = addStudent;