<script>
	import Button from '../components/Button.svelte';
	import GameBox from '../components/GameBox.svelte';
	import ArrowUp from '../components/Icons/ArrowUp.svelte';
	let TICK_DELAY = 200;
	let GRID_SIZE = 20;
	let GRID_SIZE_X = 15;
	let GRID_SIZE_Y = 25;
	let SNAKE_HEAD = 0;
	let MAX_FOOD_COUNT = 10;
	let lost = false;
	let isNewGame = true;
	let isGameWon = false;
	let availableFood;
	let grid = [...Array(GRID_SIZE_Y)].map(() => [...Array(GRID_SIZE_X)].map(() => 'empty'));
	let snakePosition = [[12, 7]];
	let direction = [0, 1];
	let gridWithSnake = grid;
	function getRandomInt(max) {
		return Math.floor(Math.random() * Math.floor(max));
	}
	function randomFood() {
		grid[getRandomInt(GRID_SIZE_Y)][getRandomInt(GRID_SIZE_X)] = 'food';
	}
	randomFood();
	$: {
		for (let i = 0; i < gridWithSnake.length; i++) {
			for (let k = 0; k < gridWithSnake.length; k++) {
				if (gridWithSnake[i][k] === 'snake') {
					gridWithSnake[i][k] = 'empty';
				}
			}
		}
		snakePosition.forEach(([x, y]) => {
			gridWithSnake[x][y] = 'snake';
		});
	}
	function initializeGame(n) {
		setTimeout(() => {
			const [x, y] = snakePosition[SNAKE_HEAD];
			const [dx, dy] = direction;
			const newHead = [dx + x, y + dy];
			function isXOutOfBounds(n) {
				return n < 0 || n > GRID_SIZE_X - 1;
			}
			function isYOutOfBounds(n) {
				return n < 0 || n > GRID_SIZE_Y - 1;
			}
			if (isYOutOfBounds(newHead[0]) || isXOutOfBounds(newHead[1])) {
				lost = true;
				return;
			}
			let ateFood = false;
			if (gridWithSnake[newHead[0]][newHead[1]] === 'food') {
				ateFood = true;
				// TODO: Implement a mode to have limited and unlimited food for user to play
				randomFood();
			}
			const snakeBody = snakePosition.slice(0, snakePosition.length - (ateFood ? 0 : 1));
			if (snakeBody.some((x) => x[0] === newHead[0] && x[1] === newHead[1])) {
				lost = true;
				return;
			}
			snakePosition = [newHead, ...snakeBody];
			initializeGame(TICK_DELAY - Math.min(snakePosition.length, 15) * 10);
		}, n);
	}

	function restart() {
		snakePosition = [[12, 7]];
		direction = [0, 1];
		grid = [...Array(GRID_SIZE_Y)].map(() => [...Array(GRID_SIZE_X)].map(() => 'empty'));
		gridWithSnake = grid;
		randomFood();
		lost = false;
		isNewGame = false;
		initializeGame(TICK_DELAY);
	}
</script>

<svelte:window
	on:keydown={(e) => {
		switch (e.key) {
			case 'a':
			case 'ArrowLeft':
				direction = [0, -1];
				break;
			case 'd':
			case 'ArrowRight':
				direction = [0, 1];
				break;
			case 'w':
			case 'ArrowUp':
				direction = [-1, 0];
				break;
			case 's':
			case 'ArrowDown':
				direction = [1, 0];
				break;
		}
	}}
/>

<section>
	<div class="container mx-auto">
		<GameBox>
			<div class="flex gap-x-8 items-center">
				<div class="relative z-10">
					<!-- <h3 class="text-center">snake length {snakePosition.length}</h3> -->
					<div class="flex items-center justify-center relative">
						<div class="shadow-[inset_1px_5px_11px_rgba(2,18,27,0.71)] rounded-lg overflow-hidden">
							{#each gridWithSnake as row, i}
								<div class="flex">
									{#each row as cell, k}
										{#if cell === 'food'}
											<!-- svelte-ignore a11y-click-events-have-key-events -->
											<div on:click={() => (grid[i][k] = 'food')} class="w-5 h-5 empty">
												<div class={cell} />
											</div>
										{:else}
											<!-- svelte-ignore a11y-click-events-have-key-events -->
											<div on:click={() => (grid[i][k] = 'food')} class="w-5 h-5 {cell}" />
										{/if}
									{/each}
								</div>
							{/each}
						</div>
						{#if isNewGame}
							<div class="absolute bottom-20 left-0 w-full flex justify-center z-10">
								<Button appearance="primary" on:click={restart}>start-game</Button>
							</div>
						{/if}
						{#if lost}
							<div
								class="absolute bottom-10 left-0 w-full flex justify-center items-center flex-col"
							>
								<p
									class="bg-primary2 py-4 text-accent-green text-center w-full bg-opacity-80 mb-5 text-2xl"
								>
									GAME OVER!
								</p>
								<Button appearance="ghost" on:click={restart}>start-game</Button>
							</div>
						{/if}
					</div>
				</div>
				<div>
					<div class="rounded-lg bg-primary2 bg-opacity-20 p-6 relative z-10">
						<p class="text-white">// use keyboard arrows or</p>
						<p class="text-white">// <code>W, A, S, D</code> keys to play</p>

						<div class="mt-5">
							<div class="flex items-center justify-center mb-2">
								<div class="bg-primary1 rounded-lg text-white px-6 py-3 flex">
									<ArrowUp class="fill-white" />
								</div>
							</div>
							<div class="flex items-center justify-center gap-x-2">
								<div class="bg-primary1 rounded-lg text-white px-6 py-3 flex">
									<ArrowUp class="fill-white -rotate-90" />
								</div>
								<div class="bg-primary1 rounded-lg text-white px-6 py-3 flex">
									<ArrowUp class="fill-white rotate-180" />
								</div>
								<div class="bg-primary1 rounded-lg text-white px-6 py-3 flex">
									<ArrowUp class="fill-white rotate-90" />
								</div>
							</div>
						</div>
					</div>

					<!-- <p class="text-white mt-8 mb-4">// food left</p>
					<div class="flex items-center justify-center flex-wrap gap-x-6 max-w-xs">
						{#each [...Array(MAX_FOOD_COUNT)] as f, i}
							<div class="food" />
						{/each}
					</div> -->
				</div>
			</div>
		</GameBox>
	</div>
</section>

<style>
	.empty {
		background: rgba(1, 22, 39, 0.84);
	}
	.food {
		position: relative;
		width: 1.25rem;
		height: 1.25rem;
		background-color: rgba(67, 217, 172, 0.1);
		border-radius: 50%;
	}
	.food::before {
		content: '';
		position: absolute;
		z-index: 2;
		width: 8px;
		height: 8px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: #43d9ad;
		border-radius: 50%;
	}
	.food::after {
		content: '';
		position: absolute;
		z-index: 1;
		width: 15px;
		height: 14px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: rgba(67, 217, 172, 0.2);
		border-radius: 50%;
	}
	.snake {
		background-color: #43d9ad;
	}
</style>
