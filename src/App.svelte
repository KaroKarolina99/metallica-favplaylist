<script lang="ts">
  import PlaylistItem from "./lib/PlaylistItem.svelte";

  const TRACKS = [
    {
      id: 1,
      title: "...And Justice for All ",
      artist: "Metallica",
      album: "...And Justice for All ",
      length: "9:45",
    },
    {
      id: 2,
      title: "Devil's Dance",
      artist: "Metallica ",
      album: "Reload",
      length: "5:23",
    },
    {
      id: 3,
      title: "For Whom The Bell Tolls",
      artist: "Metallica",
      album: "Ride The Lightning",
      length: "5:18",
    },
  ] as Track[];
  let currentTrack = $state(-1);
</script>

<div class="min-h-screen bg-slate-800 text-white">
  <header class="max-w-screen-md mx-auto bg-pink-600 text-2xl font-bold p-3">
    <h1>Metallica's Favourites - KS</h1>
  </header>
  <main class="max-w-screen-md mx-auto">
    <ol class="border-4 border-pink-600">
      {#each TRACKS as track}
        <PlaylistItem
          {track}
          state={track.id === currentTrack ? "playing" : "paused"}
          onclick={() => {
            track.id === currentTrack
              ? (currentTrack = -1)
              : (currentTrack = track.id);
          }}
        />
      {/each}
    </ol>
  </main>
</div>