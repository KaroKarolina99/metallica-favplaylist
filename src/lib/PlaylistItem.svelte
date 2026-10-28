<script lang="ts">
  import { mdiMusic, mdiPlay, mdiPause } from "@mdi/js";

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

<li class="flex flex-row px-3 py-2 space-x-4 mb-2">
  <div
    class="w-12 h-12 text-neutral-400 p-2 border border-neutral-400"
    aria-hidden="true"
  >
    <Icon path={mdiMusic} />
  </div>
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
