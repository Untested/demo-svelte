<script lang="ts">
	export let style: string = undefined;
</script>

<button class={`default-class ${$$props.className}`} {style}>Sample button</button>

<style lang="scss">
	.default-class {
		background-color: pink;
	}
</style>
