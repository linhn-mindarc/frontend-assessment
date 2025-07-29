<template>
  <header class="hero-section">
    <picture>
      <source media="(max-width: 768px)" :srcset="mobileBannerImageUrl">
      <img :src="desktopBannerImageUrl" alt="Hero Banner" class="hero-section__banner">
    </picture>
    <div class="hero-section__content">
      <h1 class="hero-section__title">Hello Developer!</h1>
      <p class="hero-section__description">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
    </div>
  </header>
  <div class="exercise-page exercise-page-1">
    <main class="container">
      <section class="content-section">
          <div class="content-grid">
            <article class="content-card" v-for="(contentItem, itemIndex) in contentItemsList" :key="itemIndex">
              <div class="content-card__body">
                <img :src="contentImageUrl" :alt="`Content ${itemIndex + 1}`" class="content-card__image">
                <p class="content-card__description">{{ contentItem.description }}</p>
              </div>
              <div class="content-card__footer">
                <a href="#" class="content-card__link">Read More</a>
              </div>
            </article>
          </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Exercise1',
  data() {
    return {
      desktopBannerImageUrl: 'https://placehold.co/1920x650',
      mobileBannerImageUrl: 'https://placehold.co/600x600',
      contentImageUrl: 'https://placehold.co/400x300',
      contentItemsList: [
        {
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
        }
      ]
    }
  }
}
</script>