<script lang="ts">
  import anime from 'animejs'
  import classNames from 'classnames'
  import { onMount } from 'svelte'
  import crowImage from '/illustrations/crow.png'

  export let quote = 'Some widsom should be here...'
  export let titan = 'Universe'
  export let title = ''
  export let index = 0

  let expanded = false

  const toggleExpand = () => {
    expanded = !expanded

    if (expanded) {
      anime({
        targets: `#card-container-${index}`,
        easing: 'easeInOutQuad', // start and end the animation slowly, speed up in the middle
        duration: 1000, // the animation will take 2 seconds
      })
    } else {
      // anime({
      //   targets: `#card-container-${index}`,
      //   width: 'initial', // return to initial state
      //   height: 'initial', // return to initial state
      //   top: 'initial', // return to initial state
      //   left: 'initial', // return to initial state
      //   right: 'initial', // return to initial state
      //   bottom: 'initial', // return to initial state
      //   easing: 'easeInOutQuad', // start and end the animation slowly, speed up in the middle
      //   duration: 2000, // the animation will take 2 seconds
      // })
    }

    // if (expanded) {
    //   anime({
    //     targets: '.crow-image',
    //     translateX: ['-50vw'], // move to the left
    //     translateY: ['50vh'], // move downwards
    //     rotate: ['45deg'], // rotate to 45 degrees
    //     easing: 'easeInOutQuad', // start and end the animation slowly, speed up in the middle
    //     duration: 2000, // the animation will take 2 seconds
    //   })
    // }
  }

  const quoteToParagraphs = quote.split('\n')

  onMount(() => {
    anime({
      targets: '.crow-image',
      translateX: ['-50vw', 0],
      translateY: ['-50vh', 0],
      rotate: ['-45deg', 0],
      easing: 'easeInOutQuad',
      duration: 2000,
      delay: anime.stagger(300),
    })
  })
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  on:click={toggleExpand}
  class={classNames('fixed inset-0 z-20 bg-green-900 bg-opacity-70', {
    hidden: !expanded,
  })}
/>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class={classNames('text-left h-fit', {
    // TODO: Turn this into fixed if height is less than viewport or USE a scrollbar
    'fixed inset-28 z-30': expanded,
    'cursor-pointer': !expanded,
  })}
  on:click={() => (expanded = true)}
>
  <div
    class="bg-dark-blue max-h-full p-4 relative card-container h-42"
    id={`card-container-${index}`}
  >
    <div class="absolute -top-[70px] left-0">
      <img
        src={crowImage}
        alt=""
        role="presentation"
        class="w-[84px] h-[100px] crow-image"
      />
    </div>
    <div class="max-h-[500px] overflow-y-auto content-scroll pr-4">
      {#if expanded}
        <div
          class={classNames('max-h-full', {
            'line-clamp-6': !expanded,
            'line-clamp-none': expanded,
          })}
        >
          {#each quoteToParagraphs as paragraph}
            {#if paragraph === ''}
              <br />
            {:else}
              <p class="text-bluey font-medium">
                {paragraph}
              </p>
            {/if}
          {/each}
        </div>
      {/if}
    </div>

    {#if !expanded}
      <p class="text-bluey font-medium w-full text-3xl">
        <span class="opacity-60"
          >{title.split(' ')[0]}{' '}{title.split(' ')[1]}</span
        >
        <span class="text-[#FCC300]">
          {title.slice(9)}
        </span>
      </p>
      <div
        class={classNames('max-h-full mt-3', {
          'line-clamp-2': !expanded,
        })}
      >
        {#each quoteToParagraphs as paragraph}
          {#if paragraph === ''}
            <br />
          {:else}
            <p class="text-bluey font-medium">
              {paragraph}
            </p>
          {/if}
        {/each}
      </div>
    {/if}
  </div>
</div>

<style>
  .card-titan {
    /* TODO: Add an inset shadow */
    /* box-shadow: inset 0 -4px 4px 1px rgb(10, 60, 73); */
  }

  .content-scroll::-webkit-scrollbar {
    width: 12px;
  }

  .content-scroll::-webkit-scrollbar-track {
    background: #174b58;
  }

  .content-scroll::-webkit-scrollbar-thumb {
    background-color: var(--color-text);
    border-radius: 0px;
    border: 3px solid var(--color-text);
  }
</style>
