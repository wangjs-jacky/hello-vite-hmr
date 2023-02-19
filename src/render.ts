import "./style.css";

/* 子页面监听监听模块变化 */
/* if (import.meta.hot) {
  import.meta.hot.accept((mod) => mod.renderClient());
} */

export const renderClient = () => {
  const app = document.querySelector("#root")!;
  app.innerHTML = `
    <h1>Hello vite1222d2</h1>
  `;
};
