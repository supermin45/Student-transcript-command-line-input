/**
 * Created by Administrator on 2017/8/27.
 */
'use strict'
function pintTranscript(students, SnoStr) {
    let snoArr = judgeSno(students, SnoStr);
    if (snoArr.length === 0) {
        return -1;
    }
    let legalStudents = getLegalStudents(students, snoArr);
    let transcript = `${printTitle(students)}
========================
${printGrade(legalStudents)}
========================
${pintClassGrade(legalStudents)}`;

    return transcript;
}

function judgeSno(students, SnoStr) {
    let result = [];
    let snoArr = SnoStr.split(',');

    students.forEach(a => {
        if (snoArr.includes(a.Sno)) {
            result.push(a.Sno);
        }
    });

    return result;
}

function getLegalStudents(students, snoArr) {
    return students.filter(e => snoArr.includes(e.Sno));
}

function printTitle(students) {
    let result = [];
    for (let student of students) {
        for (let subject of student.subjects) {
            result.push(subject.course);
        }
        break;
    }

    return `成绩单
姓名|${result.join('|')}|平均分|总分`;
}

function printGrade(legalStudents) {
    let result = [];
    legalStudents.forEach(a => {
        let subjects = a.subjects;
        let scores = subjects.map(e => e.score);
        result.push(`${a.name}|${scores.join('|')}|${a.averageScore}|${a.totalScore}`);
});

    return result.join('\n');
}

function pintClassGrade(legalStudents) {
    let classTotalArr = [];

    legalStudents.forEach(a => {
        classTotalArr.push(a.totalScore);
    });

    let classTotalScore = classTotalArr.reduce((sum, value) => {
                              return sum + value;
                           }, 0);
    let classAverageScore = (classTotalScore / classTotalArr.length).toFixed(2);
    let classMedian = 0;
    let length = Math.floor(classTotalArr.length / 2);
    if (classTotalArr.length % 2 !== 0) {
        classMedian = classTotalArr[length - 1];
    } else {
        classMedian = (classTotalArr[length - 1] + classTotalArr[length - 1]) / 2;
    }

    return `全班总分平均数：${classAverageScore}
全班总分中位数：${classMedian}`;
}
module.exports = pintTranscript;