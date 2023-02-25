<script>
  export let closeMenu;
  import {base} from '$app/paths'

  const scrollToElement = (selector) => {
    const elementTo = document.querySelector(selector);
    if (!elementTo) return;

    let position = elementTo.getBoundingClientRect().top;
    let offset = position + window.pageYOffset;

    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });

    closeMenu()
  };
</script>

<button class='bg-secondaryColor py-3 px-7 text-textColor rounded-full uppercase border-0 font-medium'>
  <a href={base} on:click|preventDefault={() => scrollToElement("#footer")}>Contact</a>
</button>
