<script>
  export let title;
  export let content;
  export let theme;
  export let align;
  export let technologies;
  let color;

  $: if (theme === "green") color = "text-secondaryAccentColor";
  $: if (theme === "blue") color = "text-textColor";
</script>

<h2
  class={`font-fraunces text-textColor text-3xl lg:text-4xl mb-6
    ${theme === 'green' && 'bg-secondaryColor rounded p-2 pl-10 pr-10'}
    ${color ? color : "text-textColor"} 
    ${align === "left" ? "text-left" : "text-center"}
  `}
>
  {title}
</h2>
<p
  class={`font-medium leading-7 md:max-w-md
    ${color ? color : "text-textColor"} 
    ${theme === 'green' && 'bg-backgroundColor/90 rounded p-2'}
    ${align === "left" ? "text-left" : "text-center"}
  `}
>
  {content}
</p>
{#if technologies}
  <p class='flex justify-center'>
    {#each technologies as technology}
    <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-textColor bg-secondaryColor last:mr-0 mr-1">{technology}</span>
    {/each}
  </p>
{/if}