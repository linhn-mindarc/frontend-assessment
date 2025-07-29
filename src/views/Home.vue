<template>
  <div class="exercise-page py-12">
    <div class="container">
      <header class="page-header text-center mb-12">
        <h1 class="text-4xl">Frontend Assessment</h1>
        <p class="text-lg">Two exercises to evaluate frontend skills with Vue.js and responsive design</p>
      </header>
      
      <div class="exercise-cards">
        <router-link to="/exercise1" class="exercise-card">
          <div class="exercise-card__header">
            <h3 class="exercise-card__title">EXERCISE</h3>
            <span class="exercise-card__number">01</span>
          </div>
          
          <div class="exercise-card__content">
            <h2 class="exercise-card__heading">Product Card Layout</h2>
            <p class="exercise-card__description">
              Create responsive interface with product cards, implementing BEM and SASS architecture
            </p>
            
            <ul class="exercise-card__requirements">
              <li>Responsive design for mobile and desktop</li>
              <li>BEM methodology for CSS naming</li>
              <li>SASS/SCSS architecture</li>
              <li>Component-based styling</li>
            </ul>
          </div>
          
          <div class="exercise-card__footer">
            <span class="exercise-card__button">
              Start Exercise →
            </span>
          </div>
        </router-link>
        
        <router-link to="/exercise2" class="exercise-card">
          <div class="exercise-card__header">
            <h3 class="exercise-card__title">EXERCISE</h3>
            <span class="exercise-card__number">02</span>
          </div>
          
          <div class="exercise-card__content">
            <h2 class="exercise-card__heading">Advanced Components</h2>
            <p class="exercise-card__description">
              Build complex components with Vue.js and integration patterns
            </p>
            
            <ul class="exercise-card__requirements">
              <li>Vue Composition API</li>
              <li>State management patterns</li>
              <li>Component communication</li>
              <li>Performance optimization</li>
            </ul>
          </div>
          
          <div class="exercise-card__footer">
            <span class="exercise-card__button">
              Start Exercise →
            </span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      pageContent: {
        title: 'Frontend Assessment',
        description: 'Two exercises to evaluate frontend skills with Vue.js and responsive design',
        exercises: [
          {
            id: 1,
            route: '/exercise1',
            title: 'EXERCISE',
            number: '01',
            heading: 'Product Card Layout',
            description: 'Create responsive interface with product cards, implementing BEM and SASS architecture',
            requirements: [
              'Responsive design for mobile and desktop',
              'BEM methodology for CSS naming',
              'SASS/SCSS architecture',
              'Component-based styling'
            ],
            buttonText: 'Start Exercise →'
          },
          {
            id: 2,
            route: '/exercise2',
            title: 'EXERCISE',
            number: '02',
            heading: 'Advanced Components',
            description: 'Build complex components with Vue.js and integration patterns',
            requirements: [
              'Vue Composition API',
              'State management patterns',
              'Component communication',
              'Performance optimization'
            ],
            buttonText: 'Start Exercise →'
          }
        ]
      }
    }
  }
}
</script>
