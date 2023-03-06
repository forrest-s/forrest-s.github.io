<script>
  import { fly } from 'svelte/transition';
  import {base} from '$app/paths'

  // Components
  import Menu from "./Menu.svelte";
  import Icon from "@iconify/svelte";
  import ContactButton from './ContactButton.svelte';

  // Variables
  export let topNavIsActive;
  export let handleMenu;
  export let closeMenu;

  const scrollToElement = (selector) => {
    const elementTo = document.querySelector(selector);
    if (!elementTo) return;

    let position = elementTo.getBoundingClientRect().top;
    let offset = position + window.pageYOffset;

    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  };
  
</script>

<nav
  id="navbar"
  class="z-50 flex flex-col items-center absolute top-0 left-0 gutter w-full xl:top-4"
>
  <div class:blur={topNavIsActive} class="flex items-center justify-between w-full py-6 lg:px-8">
    <!-- Logo -->
    <div>
      <a href={base} class="text-[#163A37] font-black text-2xl md:text-4xl tracking-wide">
        Forrest S
      </a>
    </div>
    <!-- Hamburger -->
    <div
      class={`transition-all md:hidden ${
        topNavIsActive === true ? "hamburger-transition noclick" : ""
      }`}
      on:click={() => handleMenu("top")}
    >
      <Icon icon="ri:git-branch-fill" class={`text-shadowColor text-4xl`} />
    </div>
    <ul class="hidden md:flex items-center space-x-10 text-primaryColor font-medium text-lg">
      <li><a href={base} on:click|preventDefault={() => scrollToElement("#section1")}>About</a></li>
      <li><a href={base} on:click|preventDefault={() => scrollToElement("#section3")}>Knowledge</a></li>
      <li><a href={base} on:click|preventDefault={() => scrollToElement("#section4")}>Projects</a></li>
      <ContactButton {closeMenu}/>
    </ul>
  </div>

  <!-- Mobile Menu -->
  {#if topNavIsActive === true}
    <div class="absolute top-0 left-0 w-screen h-screen bg-black/25" transition:fly on:click|self={closeMenu}>
      <div class="z-50 ml-5 mr-5 mt-20 relative" on:click|self={closeMenu}>
        <Menu {closeMenu} />
      </div>
    </div>
  {/if}
</nav>

<style>
  .hamburger-transition {
    opacity: 0.6;
  }
</style>
