<script lang="ts">
    import App from '../App';
    let name = 'world';
    $: promise = new App().sayHello(name);
</script>

<input bind:value={name}>
{#await promise then message}
	<p>message: {message}</p>
{/await}
