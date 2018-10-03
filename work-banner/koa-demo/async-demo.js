const fs = require('fs');

async function one() {
    let pro = new Promise(function (resolve,reject) {
        fs.readFile("./one.txt",function (err,data) {
            if (err) {
                reject(err);
            }else {
                resolve(data.toString());
            }
        });
    });

    let pro2 = new Promise(function (resolve,reject) {
        fs.readFile("./two.txt",function (err,data) {
            if (err) {
                reject(err);
            }else {
                resolve(data.toString());
            }
        })
    });
    console.log("######");
    let pro0 = await pro;
    let pro1 = await pro2;
    console.log(pro0);
    console.log(pro1);
    console.log("######");
};
one();

/*
function two() {
    let pro = new Promise(function (resolve,reject) {
        fs.readFile("./one.txt",function (err,data) {
            if (err) {
                reject(err);
            }else {
                resolve(data.toString());
            }
        });
    });

    console.log("######");
    let pro2 = new Promise(function (resolve,reject) {
        fs.readFile("./two.txt",function (err,data) {
            if (err) {
                reject(err);
            }else {
                resolve(data.toString());
            }
        })
    });
    console.log("%%%%%%");
    Promise.all([pro,pro2]).then(function (data) {
        console.log(data);
    })
}
two();*/
