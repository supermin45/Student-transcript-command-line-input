let getNumber = require('cli-interact').getNumber;
let question = require('cli-interact').question;

let getStudent = require('./getStudent');
function addStudentInfo() {
    return "请输入学生信息（格式：姓名, 学号, 班级, 学科: 成绩, ...），按回车提交：";
}
function getMenu() {
    return `1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`;
}


function main() {
    let students = [];

    while (true) {
        switch (getNumber(getMenu())) {
            case 1:
                let student;
                while ((student = getStudent(question(addStudentInfo()))) === -1)
                    ;
                students.push(student);
                break;
            case 2:
                console.log("显示成绩");
                break;
            case 3:
                return;
            default :
                break;
        }
    }
}

module.exports = {main, addStudentInfo};