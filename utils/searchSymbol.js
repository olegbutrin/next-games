const searchSymbol = (hex) => {
  const symbol = `<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' id='SearchSymbol' x='0px' y='0px' viewBox='0 0 202.474 202.474' xml:space='preserve'><path fill='${hex}' d='M192.372,146.64l-37.328-37.329c3.579-9.173,5.472-19.018,5.472-29.16c0-21.408-8.338-41.536-23.477-56.675  C121.901,8.337,101.773,0,80.364,0S38.827,8.337,23.689,23.476c-31.25,31.251-31.25,82.1,0,113.35  c15.138,15.139,35.266,23.477,56.675,23.477c9.768,0,19.261-1.754,28.143-5.079l37.64,37.64c6.197,6.198,14.415,9.611,23.141,9.611  h0.001c8.736,0,16.968-3.42,23.179-9.63l0.294-0.295C205.524,179.786,205.353,159.62,192.372,146.64z M44.195,116.319  c-19.943-19.943-19.943-52.394,0-72.338C53.856,34.32,66.701,29,80.364,29s26.508,5.32,36.169,14.981s14.982,22.507,14.982,36.169  c0,13.663-5.321,26.508-14.982,36.169s-22.506,14.982-36.169,14.982S53.856,125.98,44.195,116.319z' /></svg>`;
  const b64 = btoa(symbol);
  return `url("data:image/svg+xml;base64,${b64}")`;
};

export default searchSymbol;