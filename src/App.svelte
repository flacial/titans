<script lang="ts">
  // @ts-expect-error
  import splt from 'spltjs'

  import anime from 'animejs'
  import { onMount } from 'svelte'
  import { Titan, titans, wisdom } from './assets/wisdom'
  import AsideCard from './lib/AsideCard.svelte'
  import Card from './lib/Card.svelte'
  import giantTortoiseStandingImage from '/illustrations/giant-tortoise-standing.png'
  import llamaWalkingImage from '/illustrations/llama-walking.png'

  import starOneImage from '/illustrations/star-1.png'
  import starTwoImage from '/illustrations/star-2.png'
  import starThreeImage from '/illustrations/star-3.png'

  let title = 'Wisdom by the Titans'
  let words = title.split(' ')
  let displayUltimateWisdom = false
  let foundWisdom = false
  let activeView: 'all' | Titan = 'all'
  $: selectedActiveViewWisdoms = wisdom.filter((w) => {
    if (activeView === 'all') {
      return true
    }

    return w.titan === activeView
  })

  const handleDisplayUltimateWisdom = () => {
    if (!foundWisdom) {
      foundWisdom = true
    }
    displayUltimateWisdom = !displayUltimateWisdom
  }

  onMount(() => {
    splt({
      reveal: true,
    })

    anime({
      targets: '.card-container',
      translateY: [100, 0],
      opacity: [0, 1],
      direction: 'normal',
      delay: anime.stagger(100),
      easing: 'easeInOutSine',
    })

    anime({
      targets: '.aside-card',
      translateY: [-500, 0],
      // opacity: [0, 1],
      direction: 'normal',
      delay: anime.stagger(400, { easing: 'easeOutQuad' }),
      easing: 'easeInOutQuad',
    })

    // Had to go dirty because the script gotta load first.
    document
      .querySelector('#ultimateWisdomBtn')
      ?.addEventListener('click', () => {
        anime({
          targets: '.star', // Target elements with class 'star'
          rotate: '1turn', // Rotate 1 turn
          opacity: [0, 1],
          translateX: function (_: unknown, i: number) {
            return i % 2 === 0 ? 20 : -20 // Alternate between moving right and left
          },
          translateY: function (_: unknown, i: number) {
            return i % 2 === 0 ? -20 : 20 // Alternate between moving up and down
          },
          delay: anime.stagger(100), // Delay each animation by 100ms
          easing: 'easeInOutSine', // Use a smooth easing function
        })
      })
  })
</script>

<main class="flex">
  <aside class="px-2 bg-primary min-h-full flex flex-col gap-4">
    <AsideCard
      {activeView}
      type="all"
      onClick={() => {
        activeView = 'all'
      }}
    />
    {#each titans as t, i}
      <AsideCard
        {activeView}
        type="titan"
        cardTitle={t}
        index={i + 1}
        onClick={() => {
          activeView = t
        }}
      />
    {/each}
  </aside>

  <div>
    <header class="relative mb-10 pt-4 px-4 md:pt-11 md:px-11">
      <div class="flex gap-3 h-32">
        {#each words as word (word)}
          <h1
            class="text-3xl z-10 md:text-5xl lg:text-6xl xl:text-7xl font-display page-title"
          >
            {word}
          </h1>
        {/each}
      </div>
      <img
        src={giantTortoiseStandingImage}
        alt="Giant Tortoise Standing"
        class="absolute -right-40 top-4 turtle-image w-full h-auto max-w-xs sm:max-w-sm md:max-w-lg"
      />
    </header>
    <div
      class="z-10 grid grid-cols-1 gap-x-8 gap-y-24 pt-4 px-4 md:pt-11 md:px-11 cards pb-96"
    >
      {#each selectedActiveViewWisdoms as w, i}
        <Card quote={w.quote} titan={w.titan} index={i} title={w.title} />
      {/each}
    </div>
    <footer
      class="flex justify-center items-center mt-10 relative h-60 overflow-hidden"
    >
      {#if displayUltimateWisdom}
        <div class="absolute left-1/2 -translate-x-1/2 w-96">
          <img
            src={starOneImage}
            alt="Star One"
            class="star absolute w-5 h-5"
            style="top: -30px; left: -40px;"
          />
          <img
            src={starTwoImage}
            alt="Star Two"
            class="star absolute w-5 h-5"
            style="top: -10px; right: -50px;"
          />
          <img
            src={starThreeImage}
            alt="Star Three"
            class="star absolute w-5 h-5"
            style="bottom: -50px; left: -30px;"
          />
          <img
            src={starOneImage}
            alt="Star One"
            class="star absolute w-5 h-5"
            style="bottom: -20px; right: -60px;"
          />
          <img
            src={starTwoImage}
            alt="Star Two"
            class="star absolute w-5 h-5"
            style="top: 40%; left: -50px;"
          />
          <img
            src={starThreeImage}
            alt="Star Three"
            class="star absolute w-5 h-5"
            style="top: 60%; right: -40px;"
          />
          <img
            src={starOneImage}
            alt="Star One"
            class="star absolute w-5 h-5"
            style="top: -40px; left: 60%;"
          />
          <img
            src={starTwoImage}
            alt="Star Two"
            class="star absolute w-5 h-5"
            style="bottom: -30px; left: 40%;"
          />

          <div
            class="bg-amber-950 p-2 text-sm font-bold ultimateWisdom text-center"
          >
            Stay true to yourself. When you cease to nurture yourself, you cease
            to grow.
          </div>
        </div>
      {/if}
      {#if !foundWisdom}
        <button on:click={handleDisplayUltimateWisdom} id="ultimateWisdomBtn">
          <img
            src={llamaWalkingImage}
            alt="llama Walking"
            class="w-full h-auto max-w-[100px] absolute bottom-[1px] left-2 hover:grayscale transition duration-500"
            class:grayscale={displayUltimateWisdom}
          />
        </button>
      {/if}
      <span
        class="font-display mt-auto absolute bottom-0 text-sm text-center footerText"
      >
        {#if foundWisdom}
          You have found my personal wisdom. <br />
          Yet only you possess the power to judge if it transcends into the realm
          of ultimate wisdom.
        {:else}
          Only the Llama knows the ultimate wisdom... but here is the <a
            href="https://github.com/flacial/titans"
            class="text-primary opacity-60 underline"
            target="_blank">GitHub repo</a
          >
        {/if}
      </span>
    </footer>
  </div>
</main>

<style>
  .ultimateWisdom {
    box-shadow: 0 0 80px 20px rgba(0, 0, 0, 0.5);
  }

  .footerText {
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
</style>
