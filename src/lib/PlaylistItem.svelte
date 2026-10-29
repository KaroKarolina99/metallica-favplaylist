<script lang="ts">
  import { mdiPlay, mdiPause } from "@mdi/js";
  import Icon from "./Icon.svelte";

  type Props = {
    track: Track;
    state: "playing" | "paused";
    onclick: () => void;
  };

  let { track, state, onclick }: Props = $props();

  function playPauseTrack() {
    onclick();
  }
</script>

<li class="flex flex-row px-3 py-2 space-x-4 mb-2 rounded-lg hover:bg-red-900/40 transition-colors duration-300">
  <img
  src={`${import.meta.env.BASE_URL}${track.image.replace(/^\//, "")}`}
  alt={`Album cover for ${track.album}`}
  class="w-14 h-14 object-cover rounded-lg shadow-lg border border-red-700"
/>
  <div class="flex-1 flex flex-row items-center">
    <div class="flex-1">
      <h2 class="font-bold">{track.title}</h2>
      <p>{track.artist} - {track.album}</p>
    </div>
    <p class="text-neutral-200">{track.length}</p>
  </div>
  <button
  onclick={playPauseTrack}
  class="w-12 h-12 p-2"
  aria-label={state === "playing" ? "Pause this track" : "Play this track"}
>
  {#if state === "playing"}
    <Icon path={mdiPause} />
  {:else}
    <Icon path={mdiPlay} />
  {/if}
</button>
</li>
