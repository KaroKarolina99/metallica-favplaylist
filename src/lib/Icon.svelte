<script lang="ts">
  type Props = {
    path: string;
    class?: string;
    label?: string | null;
  };

  let { path, class: cls = "", label = null }: Props = $props();
</script>

<svg
  viewBox="0 0 24 24"
  aria-hidden={label ? "true" : "false"}
  aria-label={label}
  class="block fill-current {cls}"
>
  <path d={path} />
</svg>
