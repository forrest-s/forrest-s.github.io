<script>
  import RevealOnScroll from "$lib/utils/RevealOnScroll.svelte";
  import CardContent from "./subcomponents/CardContent.svelte";

  export let knowledge;
  export let width;
  export let reverse;

  const divClass = `h-full md:self-start ${reverse ? "md:mt-2" : "md:mt-2"}`

  $: backgroundImg = width > 430 ? knowledge.desktopImg : knowledge.mobileImg ? knowledge.mobileImg : knowledge.desktopImg;
</script>

<div
  style="--img: url('{backgroundImg}')"
  class="backgroundImage h-full md:h-[700px] flex justify-center items-end gutter"
>
  <div class={divClass}>
    <RevealOnScroll>
      <div class="py-12 max-w-sm h-full flex flex-col justify-between">
        <CardContent
          align='center'
          theme={knowledge.colorTheme}
          title={knowledge.title}
          content={knowledge.content}
          technologies={knowledge.technologies}
        />
      </div>
    </RevealOnScroll>
  </div>
</div>

<style>
  .backgroundImage {
    background-image: var(--img);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  @media screen and (min-width: 430px) {
    .backgroundImage {
      background-position: top;
      background-size: cover;
    }
  }
</style>
