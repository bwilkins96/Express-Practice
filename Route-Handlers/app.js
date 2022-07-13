// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();

// Your code here
app.use(express.json());

app.use((req, res, next) => {
  console.log('Body:', req.body);
  next();
});

app.get("/artists", (req, res) => {
  let artists = getAllArtists();
  res.status(200);
  res.json(artists);
});

app.post("/artists", (req, res) => {
  res.status(201);
  res.json(addArtist(req.body));
});

app.get("/artists/latest", (req, res) => {
  let latest = getLatestArtist()
  res.status(200);
  res.json(latest);
})

app.get("/artists/latest/albums", (req, res) => {
  let albums = getAlbumsForLatestArtist();
  res.status(200);
  res.json(albums);
});



//

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
