/**
 * Created by Administrator on 2017/8/27.
 */
'use strict'

let getInputNumber = require('cli-interact').getNumber;
let question = require('cli-interact').question;
let addStudent = require('./addStudent');
let printTranscript = require('./pintTranscript');

const inputInformation = "请输入学生信息（格式：姓名, 学号, 班级, 学科: 成绩, ...），按回车提交：";
const wrongInputFormat = "请按正确的格式输入（格式：姓名, 学号, 班级, 学科: 成绩, ...）：";
const inputSno = "请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：";
const inputWrongSno =  "请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：";

function addSuccess(student) {
    console.log(`学生${student.name}的成绩被添加`);
}
function returnMainInterface() {
    return  `1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`;
}

function main() {
    let students = [];

    while (true) {
        switch (getInputNumber(returnMainInterface())) {
            case 1:
                let student = addStudent(question(inputInformation));
                while (student === -1) {
                    student = addStudent(question(wrongInputFormat));
                }
                students.push(student);
                addSuccess(student);
                break;
            case 2:
                let SnoStr = question(inputSno);
                let transcript = printTranscript(students, SnoStr);
                while (transcript === -1) {
                    SnoStr = question(inputWrongSno);
                    transcript = printTranscript(students, SnoStr);
                }
                question(transcript + `\n按任意键继续选择`);
                break;
            case 3:
                return;
            default:
                break;
        }
    }
}
function getNumber (promptText, opts) {
    var answer;
    var flagIntOnly;
    var flagAllowNoAnswer;
    var value;

    // for historical compatibility
    if (opts === true) {
        flagIntOnly = true;
    } else if (opts) {
        // better be an object;
        flagIntOnly = opts.requireInteger;
        flagAllowNoAnswer = opts.allowNoAnswer
    }

    while (true) {
        answer = readlineSync.question(promptText);

        if (answer === "\u0003") {
            // Ctl-C
            process.exit();
        } else if (flagAllowNoAnswer && (answer === '')) {
            break;
        } else {
            if (flagIntOnly) {
                value = parseInt(answer, 10);
                if (value.toString() === answer) {
                    break;
                }
            } else {
                value = parseFloat(answer);
                if (!isNaN(value) && isFinite(answer)) {
                    break;
                }
            }
        }
    }
    return value;
}
module.exports = main;