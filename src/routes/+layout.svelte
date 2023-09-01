<script>
  import { browser } from "$app/environment";

  // Styles
  import "$lib/styles/app.css";
  import "@fontsource/barlow/600.css";
  import "@fontsource/barlow/400.css";
  import "@fontsource/barlow/700.css";
  import "@fontsource/barlow/900.css";
  import "@fontsource/fraunces/900.css";
  import "@fontsource/fraunces/700.css";

  // components
  import Navbar from "$lib/components/Navbar.svelte";
  import FloatingMenu from "../lib/components/FloatingMenu.svelte";
  import Icon from "@iconify/svelte";

  let topNavIsActive = false;
  let floatingNavIsActive = false;
  let scrollable = true;
  let width;

  let fullName = ''
  let email = ''
  let message = ''

  // Reactive variables
  $: if (browser) document.body.classList.toggle("noscroll", !scrollable);

  // Handlers
  const handleMenu = (menu) => {
    // Which menu is active?
    if (menu === "top") topNavIsActive = !topNavIsActive;
    if (menu === "floating") floatingNavIsActive = !floatingNavIsActive;

    if (topNavIsActive === true || floatingNavIsActive === true) {
      scrollable = false;
    }
  };

  const closeMenu = () => {
    topNavIsActive = false;
    floatingNavIsActive = false;
    scrollable = true;
  };
</script>

<svelte:window bind:innerWidth={width} />

<Navbar {topNavIsActive} {closeMenu} {handleMenu} />
<div class="relative flex items-center">
  <FloatingMenu {handleMenu} {floatingNavIsActive} {closeMenu} />
</div>
<main class:blur={floatingNavIsActive || topNavIsActive}>
  <slot {topNavIsActive} />
</main>
<footer id='footer'class="bg-shadowColor p-2 py-16 flex flex-col md:flex-row gap-8 justify-around items-center">
  <section>
    <div class="ml-6 mr-6 mb-2 text-secondaryColor font-black text-2xl md:text-4xl tracking-wide text-center">
      Forrest S
    </div>
    <ul class="flex justify-center items-center gap-6">
      <li><a href="https://www.linkedin.com/in/yulerik" target="_blank" rel="noreferrer"><Icon icon="mdi:linkedin" class={`text-secondaryColor text-4xl`} /></a></li>
      <li><a href="https://www.github.com/forrest-s" target="_blank" rel="noreferrer"><Icon icon="mdi:github" class={`text-secondaryColor text-4xl`} /></a></li>
    </ul>
  </section>
  <form class="flex flex-col p-4 rounded gap-1 text-accentColor bg-primaryColor" action="https://formspree.io/f/xrgvbvqr" method="POST" accept-charset='utf-8' name='simple-contact-form'>
    <p>Feel free to contact me for any inquires or opportunities.</p>
    <label for="full-name" class="text-tertiaryColor">Name</label>
    <input id='full-name' name="name" type="text" class="bg-primaryColor border-b-2 border-black" bind:value={fullName}>
    <label for="email-address" class="text-tertiaryColor">E-mail</label>
    <input id='email-address' type="email" class="bg-primaryColor border-b-2 border-black" name='_replyto' bind:value={email}>
    <label  for="message" class="text-tertiaryColor">Message</label>
    <textarea id='message' name="message" type="text" class="bg-primaryColor border-2 border-black rounded" bind:value={message}></textarea>
    <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission">
    <button type="submit" class="bg-shadowColor rounded p-1 text-center w-3/4 text-accentColor self-center mt-2 hover:bg-tertiaryColor hover:text-shadowColor font-semibold">Submit</button>
  </form>
</footer>