<template>
  <div class="exercise-page py-12">
    <div class="container">
      <header class="page-header text-center mb-12">
        <h1 class="text-4xl">Dynamic Content</h1>
        <p class="text-lg">Interactive tabs on desktop, accordion on mobile</p>
      </header>
      
      <!-- Desktop Tabs -->
      <div class="tabs layout--desktop-only">
        <div class="tabs__headers">
          <button 
            v-for="(dataItem, itemIndex) in tabDataList" 
            :key="itemIndex"
            :class="['tabs__header', { 'tabs__header--active': activeTabIndex === itemIndex }]"
            @click="setActiveTabIndex(itemIndex)"
          >
            {{ dataItem.title }}
          </button>
        </div>
        <div class="tabs__content">
          <div v-if="tabDataList[activeTabIndex]" v-html="tabDataList[activeTabIndex].content"></div>
        </div>
      </div>

      <!-- Mobile Accordion -->
      <div class="accordion layout--mobile-only">
        <div 
          v-for="(dataItem, itemIndex) in tabDataList" 
          :key="itemIndex"
          class="accordion__item"
        >
          <button 
            :class="['accordion__header', { 'accordion__header--active': activeAccordionIndex === itemIndex }]"
            @click="toggleAccordionItem(itemIndex)"
          >
            {{ dataItem.title }}
            <span class="accordion__icon">{{ activeAccordionIndex === itemIndex ? '−' : '+' }}</span>
          </button>
          <div 
            :class="['accordion__content', { 'accordion__content--active': activeAccordionIndex === itemIndex }]"
            v-html="dataItem.content"
          ></div>
        </div>
      </div>

      <!-- Bonus: JavaScript Expression Explanation -->
      <div class="bonus-explanation">
        <h3>Bonus Question</h3>
        <div class="code-explanation">
          <code class="code-question">('b' + 'a' + + 'a' + 'a').toLowerCase() === 'banana'</code>
          <p class="font-semibold mb-4">Explanation:</p>
          <ol>
            <li><code class="inline">'b' + 'a'</code> = <code class="inline">'ba'</code> (string concatenation)</li>
            <li><code class="inline">+ + 'a'</code> = <code class="inline">NaN</code> (unary plus converts 'a' to number, resulting in NaN)</li>
            <li><code class="inline">'ba' + NaN</code> = <code class="inline">'baNaN'</code> (NaN is converted to string 'NaN')</li>
            <li><code class="inline">'baNaN' + 'a'</code> = <code class="inline">'baNaNa'</code> (string concatenation)</li>
            <li><code class="inline">.toLowerCase()</code> = <code class="inline">'banana'</code> (converts to lowercase)</li>
          </ol>
          <p class="italic">The key is the unary plus operator (+) before the second 'a' which converts it to NaN.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Exercise2',
  data() {
    return {
      activeTabIndex: 0,
      activeAccordionIndex: 0,
      tabDataList: []
    }
  },
  
  async mounted() {
    await this.loadTabDataFromJson()
  },
  
  methods: {
    async loadTabDataFromJson() {
      try {
        const response = await fetch('/data.json')
        this.tabDataList = await response.json()
      } catch (error) {
        console.error('Error loading data:', error)
      }
    },
    
    setActiveTabIndex(newIndex) {
      this.activeTabIndex = newIndex
    },
    
    toggleAccordionItem(itemIndex) {
      if (this.activeAccordionIndex === itemIndex) {
        this.activeAccordionIndex = -1
      } else {
        this.activeAccordionIndex = itemIndex
      }
    }
  }
}
</script>