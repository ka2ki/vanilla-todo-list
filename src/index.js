import "./styles.scss";

const onClickAdd = () => {
  // input[text]の値を取得しaddTextValueの変数へ格納後、初期化する
  const addText = document.getElementById("add_text");
  const addTextValue = addText.value;
  addText.value = "";

  createIncompleteList(addTextValue);
};

// 未完了のTODOから指定の要素を削除
const removeFromIncompleteList = (target) => {
  document.getElementById("unfinished_list").removeChild(target);
};

// 未完了のTODOに追加する関数
const createIncompleteList = (text) => {
  // pタグの生成
  const p = document.createElement("p");
  p.innerText = text;

  // 完了ボタン生成
  const compBtn = document.createElement("button");
  compBtn.innerText = "完了";
  compBtn.classList.add("btn", "--comp");
  compBtn.addEventListener("click", () => {
    // 押された完了ボタンの親タグliを未完了のTODOから削除
    removeFromIncompleteList(compBtn.closest("li"));
    // 完了したTODOに追加する要素
    const addTarget = compBtn.closest("li");
    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    // li以下を初期化
    addTarget.textContent = null;

    // liタグを生成
    const li = document.createElement("li");
    // pタグを生成
    const p = document.createElement("p");
    p.innerText = text;
    // ボタンのラップ要素を生成
    const wrapBtn = document.createElement("div");
    wrapBtn.classList.add("btn_wrap");
    // 戻すボタン生成
    const returnBtn = document.createElement("button");
    returnBtn.innerText = "戻す";
    returnBtn.classList.add("btn", "--return");
    returnBtn.addEventListener("click", () => {
      // 戻すボタンの親タグ（li）を完了したTODOから削除
      const deleteTarget = returnBtn.closest("li");
      document.getElementById("comp_list").removeChild(deleteTarget);

      // テキスト取得
      const text = deleteTarget.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // liタグの子要素にp、戻すボタンを設置
    li.appendChild(p);
    li.appendChild(wrapBtn);
    wrapBtn.appendChild(returnBtn);

    // 完了したTODOに追加
    document.getElementById("comp_list").appendChild(li);
  });

  // 削除ボタン生成
  const removeBtn = document.createElement("button");
  removeBtn.innerText = "削除";
  removeBtn.classList.add("btn", "--remove");
  removeBtn.addEventListener("click", () => {
    // 押された削除ボタンの親タグliを未完了のTODOから削除
    removeFromIncompleteList(removeBtn.closest("li"));
  });

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
