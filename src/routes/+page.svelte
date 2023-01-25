<script>
  import { fly } from "svelte/transition";

  import Feature from "$lib/components/Feature.svelte";
  import Gallery from "$lib/components/Gallery.svelte";
  import Service from "$lib/components/Service.svelte";
  import ProjectCard from "$lib/components/ProjectCard.svelte";

  export let data;

  let width;

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

<svelte:window bind:innerWidth={width} />

<!-- Header -->
<header
  class="relative min-h-[620px] md:min-h-screen w-full bg-contain bg-no-repeat z-40"
>
  <img
    src="https://images.unsplash.com/photo-1503435980610-a51f3ddfee50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    class="absolute -z-[100] object-cover w-full h-full"
    alt="trees background"
  />
  <div class="gutter flex flex-col justify-center items-center">
    <h1
      class="z-20 mt-6 pt-20 lg:pt-44 pb-16 text-primaryColor text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center uppercase font-fraunces tracking-[0.5rem] font-black"
    >
      software engineer
      <hr class="border-primaryColor border-4" />
      web developer
    </h1>
    <p class="p-2 rounded bg-backgroundColor text-textColor text-xl md:text-xl lg:text-2xl xl:text-3xl text-center font-fraunces tracking-[0.5rem] font-black">
      i bring ideas to life through the art of coding.
    </p>
    <div class="z-30 mt-10 lg:mt-16">
      <a
        href={"/"}
        class={`z-30`}
        on:click|preventDefault={() => scrollToElement("#section1")}
      >
        <img
          src="/images/down-arrow-svgrepo-com.svg"
          alt="Arrow down"
          class="h-36 lg:h-44 motion-safe:animate-bounce"
        />
      </a>
    </div>
  </div>
</header>

<!-- Features -->
{#each data.features as feature (feature.title)}
  <section id={"section" + feature.id} class="max-w-[1960px] mx-auto">
    {#if data.features.indexOf(feature) % 2 !== 0}
      <Feature {width} {feature} reverse={false}/>
    {:else}
      <Feature {width} {feature} reverse={true} />
    {/if}
  </section>
{/each}

<!-- Services -->
<div id='section3' class="md:flex max-w-[1960px] mx-auto">
  {#each data.services as service (service.id)}
    <section id={"service-section" + service.id} class="flex-1">
      <Service {service} {width} />
    </section>
  {/each}
</div>

<section id='section4'>
  <ProjectCard projects={data.projects} />
</section>

<section>
  <Gallery images={data.gallery} {width} />
</section>

