<script>
  import IntersectionObserver from "$lib/utils/IntersectionObserver.svelte";
  import { fade } from "svelte/transition";
  import Icon from "@iconify/svelte";
  import Menu from "./Menu.svelte";

  export let floatingNavIsActive;
  export let handleMenu;
  export let closeMenu;
</script>

<IntersectionObserver let:intersecting bottom={80}>
  {#if !intersecting}
    <div class={`fixed w-full z-50`}>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        transition:fade={{ x: 200 }}
        class={`z-50 transition-all fixed top-[20px] right-5 rounded-full p-2 bg-white drop-shadow
        ${floatingNavIsActive === true ? "hamburger-transition noclick" : ""}
      `}
        on:click={() => handleMenu("floating")}
      >
        <Icon icon="ph:git-branch-fill" class={`text-black text-xl`} />
      </div>
      {#if floatingNavIsActive === true}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div transition:fade on:click|self={closeMenu} class="-z-50 absolute top-0 right-0 w-screen h-screen bg-black/25">
          <nav class="mt-20 ml-5 mr-5 flex h-[80vh] items-center justify-center">
            <Menu {closeMenu} />
          </nav>
        </div>
      {/if}
    </div>
  {/if}
</IntersectionObserver>
