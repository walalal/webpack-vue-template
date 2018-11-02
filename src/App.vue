<template>
    <div id="test">
        {{text}}
        <img src="~@/zebra.png" class="zebra">
    </div>
</template>

<script>
export default {
  data () {
    return {
      text: 'walalal233'
    }
  }
}
</script>

<style>
#test {
  color: #f00;
}
.zebra{
	max-width: 500px;
	width: 100%;
}
</style>
