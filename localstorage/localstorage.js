//로컬 데이터에 저장하기

//값 저장하기 --> localStorage.setitem('key', value);
//값 가져오기 --> localStorage.getitem('key');
//값 삭제하기 --> localStorage.removeitem('key');
//키(key)를 그대로 놓고 새로운 값을 저장하면 덮어쓰기가 되면서 기존 로컬 데이터 정보가 수정

window.onload = () => {
  //Set Data버튼
  const btnSLD = document.querySelector(".btnSetLocalData");
  console.log(btnSLD);

  //Input 텍스트 값
  const Input = document.querySelector("input");

  //Set Data 버튼 클릭 시
  btnSLD.addEventListener("click", () => {
    //할 일 처리 --> 입력한 텍스트 값 가져오기
    const inputValue = Input.value;
    console.log(inputValue);

    //localStorage에 저장하기
    localStorage.setItem("userid", inputValue);
    Input.value = "";
  });

  //Get Data 버튼 클릭 시
  const bunGLD = document.querySelector(".btnGetLocalData");
  console.log(bunGLD);

  bunGLD.addEventListener("click", () => {
    const getData = localStorage.getItem("userid");

    if (!getData) alert("해당 키로 로컬에 저장된 데이터가 없어요");
    else Input.value = getData; //input 텍스트 박스에 삽입
  });

  //remove 버튼 클릭 시
  const btnRLD = document.querySelector(".btnRemoveLocalData");

  btnRLD.addEventListener("click", () => {
    //할 일 처리 --> 해당 키의 로컬 데이터 삭제
    localStorage.removeItem("userid");
    alert("삭제 완료!");
    Input.value = "";
  });
};
