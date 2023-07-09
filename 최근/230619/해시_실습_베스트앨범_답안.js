function solution(genres, plays) {
  const genreMap = new Map();

  genres
    .map((v, i) => [v, plays[i]])
    .forEach(([v, play], i) => {
      const data = genreMap.get(v) || { total: 0, songs: [] };
      genreMap.set(v, {
        total: data.total + play,
        songs: [...data.songs, { play, i }].sort((a, b) => b.play - a.play).slice(0, 2),
      });
    });

  // console.log(genreMap);
  // console.log(
  //   [...genreMap.entries()].sort((a, b) => b[1].total - a[1].total)
  //   //.flatMap((item) => item[1].songs)
  //   // .map((song) => song.i)
  // );

  console.log(
    [...genreMap.entries()]
      .sort((a, b) => b[1].total - a[1].total)
      .flatMap((item) => item[1].songs)
      .flatMap((song) => song.i)
  );

  console.log("\n");
  console.log(genreMap);
  console.log([...genreMap.entries()]);
  console.log(Object.entries(genreMap));
}

solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]);
