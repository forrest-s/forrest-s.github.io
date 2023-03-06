<script>
  export let title;
  export let content;
  export let theme;
  export let align;
  let color;

  $: if (theme === "green") color = "text-secondaryAccentColor";
  $: if (theme === "blue") color = "text-textColor";
</script>

<h2
  class={`font-fraunces text-textColor text-3xl lg:text-4xl mb-6
    ${theme === 'green' && 'bg-primaryColor rounded p-2 pl-10 pr-10'}
    ${color ? color : "text-textColor"} 
    ${align === "left" ? "text-left" : "text-center"}
  `}
>
  {title}
</h2>
<p
  class={`font-medium leading-7 md:max-w-md
    ${color ? color : "text-textColor"} 
    ${theme === 'green' && 'bg-backgroundColor rounded'}
    ${align === "left" ? "text-left" : "text-center"}
  `}
>
  {content}
</p>
