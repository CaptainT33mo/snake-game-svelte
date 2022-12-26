<div class="flex relative items-center justify-center p-6 mt-8">
	<div
		class="game-box p-8 relative after:block after:absolute after:-bottom-20 after:-right-20 after:bg-secondary-blue after:rounded-full after:w-96 after:h-96 after:blur-[87px] after:bg-opacity-40 after:z-[2] before:block before:absolute before:-top-20 before:-left-20 before:bg-accent-green before:w-96 before:h-96 before:blur-[87px] before:bg-opacity-40 before:rounded-full before:-z-[1]"
	>
		<slot />
		<div
			class="game-box-bolt-top-left rounded-full w-3.5 h-3.5 flex items-center justify-center text-primary1 absolute top-3 left-3 text-opacity-40 rotate-45 cursor-default"
		>
			+
		</div>
		<div
			class="game-box-bolt-top-right rounded-full w-3.5 h-3.5 flex items-center justify-center text-primary1 absolute top-3 right-3 text-opacity-40 rotate-45 cursor-default"
		>
			+
		</div>
		<div
			class="game-box-bolt-bottom-left rounded-full w-3.5 h-3.5 flex items-center justify-center text-primary1 absolute bottom-3 left-3 text-opacity-40 rotate-45 cursor-default"
		>
			+
		</div>
		<div
			class="game-box-bolt-bottom-right rounded-full w-3.5 h-3.5 flex items-center justify-center text-primary1 absolute bottom-3 right-3 text-opacity-40 rotate-45 cursor-default"
		>
			+
		</div>
	</div>
</div>

<style>
	.game-box {
		background: linear-gradient(
			150.26deg,
			rgba(23, 85, 83, 0.7) 1.7%,
			rgba(67, 217, 173, 0.091) 81.82%
		);
		border: 1px solid #0c1616;
		box-shadow: inset 0px 2px 0px rgba(255, 255, 255, 0.3);
		backdrop-filter: blur(32px);
		border-radius: 8px;
	}
	.game-box-bolt-top-left {
		background: radial-gradient(73.08% 73.08% at 50% 26.92%, #196c6a 15.1%, #114b4a 100%);
		box-shadow: 2px 2px 4px #0d4341, inset 0px 1px 2px #1a8277;
	}
	.game-box-bolt-top-right {
		background: radial-gradient(73.08% 73.08% at 50% 26.92%, #217d7a 15.1%, #114b4a 100%);
		box-shadow: 2px 2px 4px #0d4341, inset 0px 1px 2px #1f8177;
	}
	.game-box-bolt-bottom-right {
		background: radial-gradient(73.08% 73.08% at 50% 26.92%, #234b7c 15.1%, #122e4f 100%);
		box-shadow: 2px 2px 4px #122c4e, inset 0px 1px 2px #2c588d;
	}
	.game-box-bolt-bottom-left {
		background: radial-gradient(73.08% 73.08% at 50% 26.92%, #164c51 15.1%, #0d3a40 100%);
		box-shadow: 2px 2px 4px #092d32, inset 0px 1px 2px #16645c;
	}
</style>
