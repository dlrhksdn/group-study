"use strict";

const name = document.querySelector("#name"),
    id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("#confirm-password"),
    joinBtn = document.querySelector("#button");

joinBtn.addEventListener("click", join);

function join(){
    if(!name.value) return alert("이름을 입력해주십시오.")
    if(!id.value) return alert("아이디를 입력해주십시오.")
    if(!psword.value) return alert("비밀번호를 입력해주십시오.")
    if(psword.value !== confirmPsword.value) return alert("비밀번호가 일치하지 않습니다.");

    const req = {
        name: name.value,
        id: id.value,
        psword: psword.value,
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
