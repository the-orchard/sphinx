<script lang="ts">
	import '../app.css';

	import { promoState } from '$lib/store';
	import Footer from '$lib/config/Footer.svelte';
	import Scripts from '$lib/config/Scripts.svelte';
	import { branding } from '$lib/config/branding';
</script>

<Scripts />

<div class="min-h-screen relative">
	<div class="navbar bg-base-300">
		<div class="navbar-start">
			<a class="btn btn-ghost normal-case text-xl" href="/">{branding.menuName}</a>
		</div>
		<div class="navbar-end">
			<a
				class={`btn ${$promoState === 'visible' ? 'btn-secondary' : ''}`}
				href="/about"
				on:click={() => ($promoState = 'clicked')}>About</a
			>
		</div>
	</div>
	<div class="pb-12">
		<slot />
	</div>

	<div class="text-center absolute bottom-0 w-full h-12 py-2">
		<Footer />
	</div>
</div>
