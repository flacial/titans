<script lang="ts">
  import elephantImage from '/illustrations/elephant.png'
  import giantOctopusImage from '/illustrations/giant-octopus.png'
  import kingPenquinImage from '/illustrations/king-penguin.png'
  import seaTurtleTopImage from '/illustrations/sea-turtle-top.png'

  export let type: 'all' | 'titan' = 'titan'
  export let cardTitle = type === 'all' ? 'All' : 'Uverse'
  export let index = 0

  let image
  let size = 'w-24'
  let blend = 'mix-blend-soft-light'
  let alignment = 'bottom-0 left-0 right-0 m-auto'
  let opacity = 'opacity-100'

  if (index !== 0) {
    blend = 'mix-blend-color-burn'
    alignment = 'bottom-0 right-0'
    opacity = 'opacity-25'

    switch (index % 4) {
      case 1:
        image = seaTurtleTopImage
        size = 'w-[112px]'
        break
      case 2:
        image = kingPenquinImage
        size = 'w-[75px]'
        break
      case 3:
        image = giantOctopusImage
        size = 'w-20'
        break
    }
  }

  const styles = {
    card: {
      bg: type === 'all' ? 'bg-[#554510]' : 'bg-[#FCC300]',
      textColor: type === 'all' ? 'text-[#FCC300]' : 'text-[#554510]',
      illustration: type === 'all' ? elephantImage : image,
    },
    text: {
      index: 'text-base font-bold absolute top-2 left-2 z-10',
      titanName: 'text-2xl font-bold z-10',
    },
  }
</script>

<button
  class={`${styles.card.bg} ${styles.card.textColor} relative p-2 flex items-center justify-center w-44 h-20 focus:outline-dashed focus:outline-dark-blue focus:ring-2 focus:ring-primary focus:ring-opacity-50 hover:grayscale hover:transition aside-card`}
>
  <span class={styles.text.index}>
    {index}.
  </span>
  <span class={styles.text.titanName}>
    {cardTitle}
  </span>
  <img
    src={styles.card.illustration}
    alt="Illustration"
    class={'absolute bottom-0 right-2 ' +
      size +
      ' ' +
      blend +
      ' ' +
      alignment +
      ' ' +
      opacity}
  />
</button>
