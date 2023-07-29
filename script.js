const music = new Audio('1.mp3');
// music.play();
const songs = [
    {
        id: "1",
        songName: `Khanai Suno 2.0 <br> 
        <div class="subtitle">Kaifi Khalil</div>`,
        poster: "1.jpg",
    },
    {
        id: "2",
        songName: `Set Fire To The Rain <br> 
        <div class="subtitle">Adele</div>`,
        poster: "2.jpeg",
    },
    {
        id: "3",
        songName: `Paris Ka Trip <br> 
        <div class="subtitle">Yo Yo Honey Singh</div>`,
        poster: "3.jpg",
    },
    {
        id: "4",
        songName: `Gasolina <br> 
        <div class="subtitle">Daddy Yankee</div>`,
        poster: "4.jpg",
    },
    {
        id: "5",
        songName: `Flowers<br> 
        <div class="subtitle">Miley Cyrus</div>`,
        poster: "5.jpg",
    },
    {
        id: "6",
        songName: `People <br> 
        <div class="subtitle">Libianca</div>`,
        poster: "6.jpg",
    },
    {
        id: "7",
        songName: `Agar Tum Sath Ho <br> 
        <div class="subtitle">Tamashaa</div>`,
        poster: "7.jpg",
    },
    {
        id: "8",
        songName: `Bad Guy <br> 
        <div class="subtitle">Billie Eilish</div>`,
        poster: "8.jpg",
    },
    {
        id: "9",
        songName: `Singara Siriye <br> 
        <div class="subtitle">Kantara</div>`,
        poster: "9.jpg",
    },
    {
        id: "10",
        songName: `Bombe Bombe <br> 
        <div class="subtitle">Kranti</div>`,
        poster: "10.jpg",
    },
    {
        id: "11",
        songName: `Naa Ready <br> 
        <div class="subtitle">Leo</div>`,
        poster: "  11.jpg",
    },
    {
        id: "12",
        songName: `Kaanunna Kalyanam<br> 
        <div class="subtitle">Sita Ramam</div>`,
        poster: "12.jpg",
    },
    {
        id: "13",
        songName: `Paisa Hai Toh <br> 
        <div class="subtitle">Ati Aslam</div>`,
        poster: "13.jpg",
    },
    {
        id: "14",
        songName: `Buttabomma <br> 
        <div class="subtitle">Ala Vaikunthapurramuloo</div>`,
        poster: "14.jpg",
    },
    {
        id: "15",
        songName: `Gillako Shiva <br> 
        <div class="subtitle">Vedha</div>`,
        poster: "15.jpg",
    },
    {
        id: "16",
        songName: `Maan Meri Jaan <br> 
        <div class="subtitle">King</div>`,
        poster: "16.jpg",
    },
    {
        id: "17",
        songName: `Tum Kya Mile Tha <br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster: "17.jpg",
    },
    {
        id: "18",
        songName: `What Jhumka ?  <br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster: "18.jpg",
    },
    {
        id: "19",
        songName: `Veera Raja Veera<br> 
        <div class="subtitle">Ponniyin Selvan: II</div>`,
        poster: "19.jpg",
    }
]
Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});
let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');

    }
});
const makeAllplays= () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = 'rgb(105, 105, 105, .0)';
    })
}
let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        music.src = `${index}.mp3`;
        poster_master_play.src = `${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        let songTitles = songs.filter((els) => {
            return els.id == index;
        });
        songTitles.forEach(elss => {
            let{songName} = elss;
            title.innerHTML = songName;
        });
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    });
})
let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    // console.log(music_curr);
    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
    // console.log(min1);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerHTML = `${min1}:${sec1}`;
    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentStart.innerHTML = `${min2}:${sec2}`;
    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    // console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});
seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
});
// let vol_icon = document.getElementById('vol_icon');
// let vol = document.getElementById('vol');
// let vol_bar = document.getElementsByClassName('vol_bar');
// let vol_dot = document.getElementById('vol_dot');
// vol.addEventListener('change', () => {
//     if (vol.value == 0) {
//         vol_icon.classList.remove('bi-volume-up-fill');
//         vol_icon.classList.remove('bi-volume-down-fill');
//         vol_icon.classList.add('bi-volume-off-fill');
//     }

//     if (vol.value > 0) {
//         vol_icon.classList.remove('bi-volume-up-fill');
//         vol_icon.classList.add('bi-volume-down-fill');
//         vol_icon.classList.remove('bi-volume-off-fill');
//     }

//     if (vol.value > 50) {
//         vol_icon.classList.add('bi-volume-up-fill');
//         vol_icon.classList.remove('bi-volume-down-fill');
//         vol_icon.classList.remove('bi-volume-off-fill');
//     }

//     let vol_a = vol.value;
//     vol_bar.style.width = `${vol_a}%`;
//     vol_dot.style.left = `${vol_a}%`;
// })
let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0]; // Select the first element from the collection
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('input', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    } else if (vol.value > 0 && vol.value <= 50) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    } else if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});
let back = document.getElementById('back');
let next = document.getElementById('next');
back.addEventListener('click', () => {
    index -= 1;
    if (index < 1){
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `${index}.mp3`;
    poster_master_play.src = `${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let{songName} = elss;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassNam('songItem'))[index - 1].style.background ="rgb(105, 105, 105, .1)";

    makeAllplays();
    el.target.classList.remov('bi-play-circle-fill');
    el.target.classList.ad('bi-pause-circle-fill');
    wave.classList.add('active1');
})
next.addEventListener('click', () => {
    index ++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length){
        index = 1;
    }
    music.src = `${index}.mp3`;
    poster_master_play.src = `  ${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });
    songTitles.forEach(elss => {
        let{songName} = elss;
        title.innerHTML = songName;
    });
    makeAllBackground();
    Array.from(document.getElementsByClassNam('songItem'))[index - 1].style.background ="rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remov('bi-play-circle-fill');
    el.target.classList.ad('bi-pause-circle-fill');
    wave.classList.add('active1');
});
let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];
pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});
let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];
pop_art_right.addEventListener('click', () => {
    Artists_bx.scrollLeft += 330;
});
pop_art_left.addEventListener('click', () => {
    Artists_bx.scrollLeft -= 330;
});