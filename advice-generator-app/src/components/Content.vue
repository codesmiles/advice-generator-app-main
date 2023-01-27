<template lang="">
    <div>
        {{titleNumber}}
    </div>
</template>
<script>
export default {
    setup(props) {
        const titleNumber = props.titleNumber;

        return {
            titleNumber
        }
    }
    
}
</script>
<style lang="">
    
</style>