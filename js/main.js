(() => {
  const sigils = document.querySelectorAll(".sigilContainer"),
        lBox = document.querySelector(".lightbox"),
        houseVideo = document.querySelector("video"),
        lbClose = lBox.querySelector(".close-button"),
        houseImages = document.querySelector("#houseImages"),
        houseName = document.querySelector(".house-name"),
        houseInfo = document.querySelector(".house-info");

  // store the house data in an array here
  const houseData = [ //houseData[0][1]
    ["Stark", `House Stark of Winterfell is a Great House of Westeros, ruling over the vast region known as the North from their seat in Winterfell. It is one of the oldest lines of Westerosi nobility by far, claiming a line of descent stretching back over eight thousand years. Before the Targaryen conquest, as well as during the War of the Five Kings and Daenerys Targaryen's invasion of Westeros, the leaders of House Stark ruled over the region as the Kings in the North.`],
     // 0
    ["Baratheon", `House Baratheon of Storm's End is a legally extinct Great House of Westeros. A cadet branch was formerly the royal house, but House Lannister now controls the throne. House Baratheon traditionally ruled the Stormlands on the eastern coast of Westeros, aptly named for its frequent storms, from their seat of Storm's End.
      House Baratheon became the royal house of the Seven Kingdoms after Robert Baratheon led a rebellion against the Targaryen dynasty. At the end of the rebellion, Robert ascended the Iron Throne as Robert I and married Cersei Lannister after the death of Lyanna Stark.`],
     // 1
    ["Lannister", `House Lannister of Casterly Rock is one of the Great Houses of Westeros, one of its richest and most powerful families and oldest dynasties. It is also the current royal house of the Seven Kingdoms following the extinction of House Baratheon of King's Landing, which had been their puppet house anyway.
      The Lannisters rule over the Westerlands. Their seat is Casterly Rock, a massive rocky promontory overlooking the Sunset Sea which has had habitations and fortifications built into it over the millennia. They are the Lords Paramount of the Westerlands and Wardens of the West. As the new royal house, they also rule directly over the Crownlands from their seat of the Red Keep in King's Landing, the traditional seat of the royal family.`],

    ["Tully", `House Tully of Riverrun is an exiled Great House of Westeros. Its most senior member carried the title of Lord of Riverrun and Lord Paramount of the Trident, until the Red Wedding. The current head is Lord Edmure Tully, son of the late Hoster Tully. The Tully sigil is a silver trout on a red and blue background. Their house words are "Family, Duty, Honor."`],

    ["Greyjoy", `House Greyjoy of Pyke is one of the Great Houses of Westeros. It rules over the Iron Islands, a harsh and bleak collection of islands off the west coast of Westeros, from the castle at Pyke. The head of the house is the Lord Reaper of Pyke.
      House Greyjoy's sigil is traditionally a golden kraken on a black field. Their house words are "We Do Not Sow," although the phrase "What Is Dead May Never Die" is also closely associated with House Greyjoy and their bannermen, as they are associated with the faith of the Drowned God. `],

    ["Arryn", `House Arryn of the Eyrie is one of the Great Houses of Westeros. It has ruled over the Vale of Arryn for millennia, originally as the Kings of Mountain and Vale and more recently as Lords Paramount of the Vale and Wardens of the East under the Targaryen kings and Baratheon-Lannister kings. The nominal head of House Arryn is Robin Arryn, the Lord of the Eyrie, with his stepfather Petyr Baelish acting as Lord Protector until he reaches the age of majority. `],

    ["Targaryen",`House Targaryen of Dragonstone is a Great House of Westeros and was the ruling royal House of the Seven Kingdoms for three centuries since it conquered and unified the realm, before it was deposed during Robert's Rebellion and House Baratheon replaced it as the new royal House. The few surviving Targaryens fled into exile to the Free Cities of Essos across the Narrow Sea. Currently based on Dragonstone off of the eastern coast of Westeros, House Targaryen seeks to retake the Seven Kingdoms from House Lannister, who formally replaced House Baratheon as the royal House following the destruction of the Great Sept of Baelor.`],

    ["Frey",`House Frey of the Twins was the Great House of the Riverlands, having gained their position for their treachery against their former liege lords, House Tully, who were stripped of all their lands and titles for their rebellion against the Iron Throne; House Tully had supported the independence movement for the Kingdom of the North. The current head of the house is unknown following the assassinations of Lord Walder Frey and two of his sons, Lothar Frey and Walder Rivers, by the vengeful Arya Stark. This is made more complex by the subsequent assassination of all the male Freys soon after.`],

    ["Tyrell",`House Tyrell is the principle house in the Reach and is seated in Highgarden. The Targaryens made the Tyrells Lords of Highgarden after the king of the Reach was killed. The women of House Tyrell are known to be clever leaders, which is apparent in Margaery Tyrell’s rise to become Renly Baratheon’s wife, then betrothed to Joffrey after Renly’s death. House Tyrell’s coat of arms is a golden rose on a green background, and its motto is “Growing Strong.”`]
  ]


  function popLightBox() {
    // find the right house video using the CSS class attached to the sigil that was clicked
    let targetVideo = this.className.split(" ")[1];

    // get the house name, capitalize the first character, and then rebuild the whole word with a cap.
    let targetVidCap = targetVideo.charAt(0).toUpperCase() + targetVideo.slice(1);

    // load the correct house video
    houseVideo.src = `video/House-${targetVidCap}.mp4`;
    houseVideo.load();

    // play the house video
    houseVideo.play();
    // add the show-lightbox class to the lBox element
    lBox.classList.add('show-lightbox');
  }

  function closeLightBox() {
    // stop and rewind the video element
    houseVideo.currentTime = 0;
    houseVideo.pause();
    // remove the show-lightbox class from the lBox element
    lBox.classList.remove('show-lightbox');
  }

  function animateBanners() {
    // move the banners across the screen
    const offSet = 600;

    let multiplier = this.dataset.offset,
        finalOffset = offSet * multiplier;
        // this will be a product of the mulitipier * the offset (600 * something)
    houseImages.style.right = finalOffset + "px";

    // call the showHouseData function and pass the offset to it
    showHouseData(multiplier);
  }

  function showHouseData(targetIndex) {
    debugger;

    houseName.textContent = `House ${houseData[targetIndex][0]}`;
    houseInfo.textContent = houseData[targetIndex][1];
  }

  sigils.forEach(sigil => sigil.addEventListener("click", popLightBox));
  sigils.forEach(sigil => sigil.addEventListener("click", animateBanners));


  lbClose.addEventListener("click", closeLightBox);
  houseVideo.addEventListener("ended", closeLightBox);

})();

var player = document.getElementById("myvideo");

function playPause() {
    if (player.paused)
        player.play();
    else
        player.pause();
}

function stopVideo() {
    player.pause();
    if (player.currentTime) {
        player.currentTime = 0;
    }
}

function increaseVolume() {
    if (player.volume < 1)
        player.volume = parseFloat(player.volume + 0.1).toFixed(1);
}

function decreaseVolume() {
    if (player.volume > 0)
        player.volume = parseFloat(player.volume - 0.1).toFixed(1);
}

function muteVolume() {
    if (player.muted)
        player.muted = false;
    else
        player.muted = true;
}
