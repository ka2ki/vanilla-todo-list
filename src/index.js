import "./styles.scss";

const onClickAdd = () => {
  // input[text]の値を取得し、初期化する
  const addText = document.getElementById("add_text");
  const addTextValue = addText.value;
  addText.value = "";

  // liタグの生成
  const li = document.createElement("li");
  li.innerHTML = addTextValue;

  // 未完了のTODOエリアへタグ設置
  const unfinishedList = document.getElementById("unfinished_list");
  unfinishedList.appendChild(li);
};

// 新規追加のクリックイベント
document
  .getElementById("add_btn")
  .addEventListener("click", () => onClickAdd());
