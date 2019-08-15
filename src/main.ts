const main = () => {
  const $app = document.querySelector('#app')
  if ($app) {
    $app.innerHTML = `
      <h1>ts-starter</h1>
      <p>Change your src/main.ts</p>
    `
  }
}

export default main
