<script>
  import RevealOnScroll from "../utils/RevealOnScroll.svelte";
  import ProjectContent from "./ProjectContent.svelte";
  export let projects;
</script>

<section class="gutter py-16 lg:py-24 xl:py-32">
  <h3
    class="text-center text-primaryColor text-2xl font-black font-fraunces uppercase tracking-[0.25rem] md:py-10 md:text-3xl underline"
  >
    Personal Ventures
  </h3>
  <!-- <hr class='border-primaryColor border-2'/> -->
  <section class="md:grid lg:grid-cols-2 gap-10 max-w-[1400px] mx-auto">
    {#each projects as project (project.id)}
      <RevealOnScroll let:isVisible>
        <ProjectContent {project} />
      </RevealOnScroll>
    {/each}
  </section>
</section>
