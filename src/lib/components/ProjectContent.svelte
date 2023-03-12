<script>
  export let project;
</script>

<section class="flex flex-col items-center mt-24 first-of-type:mt-16 gap-8 text-center">
  <a href={project.url} target='_blank' rel="noreferrer" class="w-1/2 rounded">
    <img src={project.image} alt="App screenshot" />
  </a>
  <div class="-mt-3">
    <h4 class="text-xl font-fraunces font-black text-project-dark-blue">
      <a href={project.url} target='_blank' rel="noreferrer" >{project.title}</a>
    </h4>
    <section class='flex gap-2 justify-center'>
      {#each project.technologies as tech}
        <p class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-textColor bg-secondaryColor last:mr-0 mr-1">{tech}</p>
      {/each}
    </section>
  </div>
  <p class="font-medium text-lg leading-8 text-project-darker-blue max-w-md">{project.content}</p>
</section>
