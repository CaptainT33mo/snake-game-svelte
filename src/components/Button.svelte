<script>
	export let appearance = 'default';
	export let type = 'button';

	const classes = {
		primary: 'bg-accent-orange text-primary1 hover:bg-[#FFAC6B]',
		default: 'bg-[#1C2B3A] text-white hover:bg-[#263B50]',
		ghost: 'bg-transparent text-white border border-white hover:border-opacity-50'
	};

	$: appearanceClass = classes[appearance];
</script>

<button
	on:click
	class="w-full sm:w-auto py-2.5 px-3.5 rounded-lg focus:outline-none cursor-pointer transition-all {appearanceClass}"
	{type}
>
	<slot />
</button>
