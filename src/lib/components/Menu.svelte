<script>
  import { fly } from "svelte/transition";
  import Icon from "@iconify/svelte";
  import ContactButton from "./subcomponents/ContactButton.svelte";
  import {base} from '$app/paths'
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

<ul
  transition:fly={{ y: -10 }}
  class="bg-primaryColor text-accentColor relative w-full sm:w-1/2 flex flex-col gap-2 justify-center items-center transition-all py-6 rounded-md drop-shadow-xl"
>
  <li class="py-4" on:click={closeMenu}>
    <a href={base} on:click|preventDefault={() => scrollToElement("#navbar")} class="font-medium text-xl">Home</a>
  </li>
  <li class="py-4" on:click={closeMenu}>
    <a href={base} on:click|preventDefault={() => scrollToElement("#section2")} class="font-medium text-xl">About</a>
  </li>
  <li class="py-4" on:click={closeMenu}>
    <a href={base} on:click|preventDefault={() => scrollToElement("#section3")} class="font-medium text-xl">Knowledge</a>
  </li>
  <li class="py-4" on:click={closeMenu}>
    <a href={base} on:click|preventDefault={() => scrollToElement("#section4")} class="font-medium text-xl">Projects</a>
  </li>
  <ContactButton {closeMenu} />
  <div on:click={closeMenu} class="absolute top-2 right-2 z-50">
    <Icon icon="bi:x" class="text-backgroundColor text-4xl font-bold z-50" />
  </div>
</ul>
