document.addEventListener("DOMContentLoaded", () => {
  // フッター年を自動更新
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
