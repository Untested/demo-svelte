<script lang="ts">
	import Button from '@src/components/Button/index.svelte';
</script>

<h1>Welcome to SvelteKit</h1>
<p>This is a dummy Svelte project for learning purposes.</p>
<Button className="custom-button" />

<style lang="scss">
	h1 {
		font-size: 7.2rem;
		color: $primary-color;
		background-color: $secondary-color;
	}
	h1,
	h2 {
		color: purple;
	}
</style>
