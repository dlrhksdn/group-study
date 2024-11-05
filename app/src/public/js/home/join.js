"use strict"

const name = document.querySelector("#name"),
    id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("#confirm password"),
    joinBtn = document.querySelector("#button");

joinBtn.addEventListener("click", join);

function join(){
    const req = {
        name: name.value,
        id: id.value,
        psword: psword.value,
        confirmPsword: confirmPsword.value,
    };

    fetch("/join", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req),
    }).then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href = "/login";
        }
        alert(res.msg) 
    })
    .catch((err) => {
        console.error(new Error("회원가입 중 에러 발생"));
    });
}
