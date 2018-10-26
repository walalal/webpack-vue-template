<template>
    <div id="test">
        {{text}}
        <img src="~@/zebra.png">
    </div>
</template>

<script>
export default {
    data(){
        return {
            text: 'walalal'
        }
    }
}
</script>

<style>
#test{
    color: #f00;
}
</style>
