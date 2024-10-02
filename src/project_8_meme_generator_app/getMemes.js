async function getMemes() {
  const response = await fetch("https://api.imgflip.com/get_memes");
  const data = await response.json();
  console.log(data.data.memes);
  return data.data.memes;
}

export default getMemes;
