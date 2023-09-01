<script>
  import { fly } from "svelte/transition";
  import {base} from '$app/paths'

  import About from "$lib/components/About.svelte";
  import Gallery from "$lib/components/Gallery.svelte";
  import Knowledge from "$lib/components/Knowledge.svelte";
  import ProjectCard from "$lib/components/ProjectCard.svelte";

  export let data;

  let width;

  const scrollToElement = (selector) => {
    const elementTo = document.querySelector(selector);
    if (!elementTo) return;

    let position = elementTo.getBoundingClientRect().top;
    let offset = position + window.scrollY;

    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  };
</script>

<svelte:window bind:innerWidth={width} />

<!-- Header -->
<header class="relative min-h-[620px] md:min-h-screen w-full bg-contain bg-no-repeat z-40">
  <img
    src={data.hero.desktopImg}
    class="absolute -z-[100] object-cover w-full h-full"
    alt="trees background"
  />
  <div class="gutter flex flex-col justify-center items-center">
    <h1 class="z-20 mt-6 pt-20 lg:pt-44 pb-16 text-primaryColor text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center uppercase font-fraunces tracking-[0.5rem] font-black">
      {data.hero.title}
      <hr class="border-primaryColor border-4" />
      {data.hero.subTitle}
    </h1>
    <p class="p-2 rounded bg-backgroundColor text-textColor text-xl md:text-xl lg:text-2xl xl:text-3xl text-center font-fraunces tracking-[0.5rem] font-black">
      {data.hero.content}
    </p>
    <div class="z-30 mt-10 lg:mt-16">
      <a
        href={base}
        class={`z-30`}
        on:click|preventDefault={() => scrollToElement("#section1")}
      >
        <img
          src="{base}/images/down-arrow-svgrepo-com.svg"
          alt="Arrow down"
          class="h-36 lg:h-44 motion-safe:animate-bounce"
        />
      </a>
    </div>
  </div>
</header>

<!-- About -->
{#each data.about as info (info.title)}
  <section id={"section" + info.id} class="max-w-[1960px] mx-auto">
    {#if data.about.indexOf(info) % 2 !== 0}
      <About {width} {info} reverse={false}/>
    {:else}
      <About {width} {info} reverse={true} />
    {/if}
  </section>
{/each}

<!-- Knowledge -->
<div id='section3' class="md:flex max-w-[1960px] mx-auto">
  {#each data.knowledges as knowledge (knowledge.id)}
  {#if data.knowledges.indexOf(knowledge) % 2 !== 0}
    <section id={"knowledge-section" + knowledge.id} class="flex-1">
      <Knowledge {knowledge} {width} reverse={true}/>
    </section>
  {:else}
    <section id={"knowledge-section" + knowledge.id} class="flex-1">
      <Knowledge {knowledge} {width} reverse={false}/>
    </section> 
  {/if}
  {/each}
</div>

<section id='section4'>
  <ProjectCard projects={data.projects} />
</section>

<section>
  <Gallery images={data.gallery} {width} />
</section>

