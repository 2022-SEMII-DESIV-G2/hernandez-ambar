(async () => {
    const pyd = await axios.get("http://localhost:4567/pyramid");
    console.log(JSON.stringify(pyd));
    // console.log(pyd.data.pyramid[0].pyramid);
  
    let count = Object.keys(pyd.data.pyramid).length;
    console.log(count);
  
    const pys = document.querySelector(".response");
    let newList = "<ul>";
    for (let index = 0; index < count; index++) {
      newList += `<li><a href="detail.html?q=${pyd.data.pyramid[index].id}">Pyramid n° ${pyd.data.pyramid[index].id}</a></li>`;
      console.log(newList);
    }
    newList += "</ul>";
    pyramid.innerHTML = newList;
    return nose;
  })();