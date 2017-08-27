/**
 * Created by Administrator on 2017/8/27.
 */
'use strict'
const addStudent = require("../../main/addStudent.js");
const pintTranscript = require("../../main/pintTranscript.js");

describe('transcript', () => {
    const student = `翟喜梅,1701,3班,数学:100,语文:78,英语:100`;
    const student1 = `张回归,1702,3班,数学:95,语文:95,英语:89`;
    const student2 = `苏凡,1703,3班,数学:90,语文:100,英语:80`;
    const student3 = `李亚楠,1704,3班,数学:100,语文:80,英语:90`;
    const student4 = `陈竹竹,1705,3班,数学:90,语文:80,英语:89`;
    const student5 = `张敏,1706,3班,数学:90,语文:90,英语:90`;
    const student6 = `霍辰辉,1707,3班,数学:90,语文:90,英语:99`;
    let students = [];

    beforeEach(() => {
        students.push(addStudent(student));
        students.push(addStudent(student1));
        students.push(addStudent(student2));
        students.push(addStudent(student3));
        students.push(addStudent(student4));
        students.push(addStudent(student5));
        students.push(addStudent(student6));
    });

    it('returns transcript when given student Sno format is correct', () => {
        let SnoStr = "1701,1702,1703,1704,1705,1706";
        let result = pintTranscript(students, SnoStr);
        expect(`成绩单
姓名|数学|语文|英语|平均分|总分
========================
翟喜梅|100|78|100|92.67|278
张回归|95|95|89|93.00|279
苏凡|90|100|80|90.00|270
李亚楠|100|80|90|90.00|270
陈竹竹|90|80|89|86.33|259
张敏|90|90|90|90.00|270
========================
全班总分平均数：271.00
全班总分中位数：270`).toEqual(result);
    });


});
