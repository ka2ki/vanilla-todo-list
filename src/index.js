import "./styles.scss";

const onClickAdd = () => {
  // input[text]の値を取得しaddTextValueの変数へ格納後、初期化する
  const addText = document.getElementById("add_text");
  const addTextValue = addText.value;
  addText.value = "";

  // pタグの生成
  const p = document.createElement("p");
  p.innerText = addTextValue;

  // 完了ボタン生成
  const compBtn = document.createElement("button");
  compBtn.innerText = "完了";
  compBtn.classList.add("btn", "--comp");

  // 削除ボタン生成
  const removeBtn = document.createElement("button");
  removeBtn.innerText = "削除";
  removeBtn.classList.add("btn", "--remove");

  // ボタンのラップ要素を生成
  const wrapBtn = document.createElement("div");
  wrapBtn.classList.add("btn_wrap");

  // btn_wrapの子要素に完了、削除ボタンを設置
  wrapBtn.appendChild(compBtn);
  wrapBtn.appendChild(removeBtn);

  // liタグの生成
  const li = document.createElement("li");

  // liタグの子要素にaddTextValue、完了、削除ボタンを設置
  li.appendChild(p);
  li.appendChild(wrapBtn);

  // liタグ設置
  const unfinishedList = document.getElementById("unfinished_list");
  unfinishedList.appendChild(li);
};

// 新規追加のクリックイベント
document
  .getElementById("add_btn")
  .addEventListener("click", () => onClickAdd());
