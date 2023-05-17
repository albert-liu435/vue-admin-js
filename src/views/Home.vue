<template>
  <div>Home</div>
  <!-- 文本插值 -->
  <span>Message: {{ msg }}</span>


  <p>Using text interpolation: {{ rawHtml }}</p>
  <!-- 在当前组件实例上，将此元素的 innerHTML 与 rawHtml 属性保持同步。span 的内容将会被替换为 rawHtml 属性的值 -->
<p>Using v-html directive: <span v-html="rawHtml"></span></p>

<!-- 计算属性 -->
<p>Has published books:</p>
<!-- 比较臃肿，可以通计算属性来解决 -->
<!-- <span>{{ author.books.length > 0 ? 'Yes' : 'No' }}</span> -->

<span>{{ publishedBooksMessage }}</span>

<p>{{ calculateBooksMessage() }}</p>

</template>

<script>



export default {

    data(){
        return{
            msg:'yellow',
            rawHtml:'<span style="color: red">This should be red.</span>',
            author: {
                name: 'John Doe',
                books: [
                'Vue 2 - Advanced Guide',
                'Vue 3 - Basic Guide',
                'Vue 4 - The Mystery'
                ]
            },
            firstName: 'John',
            lastName: 'Doe'
        }
    },
    computed: {
    // 一个计算属性的 getter
    //在模板中使用计算属性的方式和一般的属性并无二致。Vue 会检测到 this.publishedBooksMessage 依赖于 this.author.books，所以当 this.author.books 改变时，任何依赖于 this.publishedBooksMessage 的绑定都将同时更新。
    publishedBooksMessage() {
      // `this` 指向当前组件实例
      return this.author.books.length > 0 ? 'Yes' : 'No'
    },
    //这也解释了为什么下面的计算属性永远不会更新，因为 Date.now() 并不是一个响应式依赖：
    now() {
        return Date.now()
        },
        fullName: {
      // getter
      //现在当你再运行 this.fullName = 'John Doe' 时，setter 会被调用而 this.firstName 和 this.lastName 会随之更新。
      get() {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set(newValue) {
        // 注意：我们这里使用的是解构赋值语法
        [this.firstName, this.lastName] = newValue.split(' ')
      }
    }
  },
  // 组件中,若我们将同样的函数定义为一个方法而不是计算属性，两种方式在结果上确实是完全相同的，然而，不同之处在于计算属性值会基于其响应式依赖被缓存。一个计算属性仅会在其响应式依赖更新时才重新计算。这意味着只要 author.books 不改变，无论多少次访问 publishedBooksMessage 都会立即返回先前的计算结果，而不用重复执行 getter 函数。

    methods: {
    calculateBooksMessage() {
        return this.author.books.length > 0 ? 'Yes' : 'No'
    }
    }


}
</script>

<style>

</style>