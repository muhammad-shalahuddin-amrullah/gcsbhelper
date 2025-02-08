<script>
	const { isTop = true } = $props();
</script>

<header class:scrolled={!isTop}>
	<nav>
		<a href="https://rsvp.withgoogle.com/events/juaragcp-s11/home" target="_blank">
			<span>Join JuaraGCP S11 </span> <i class="gc-external-link"></i>
		</a>
	</nav>
</header>

<style>
	header {
		position: fixed;
		left: 0;
		top: 0;
		display: block;
		width: 100%;
		z-index: 1;
		transition: all 0.5s;
		padding: 0 5%;
		view-transition-name: header;
	}
	header.scrolled {
		background-color: var(--bg-primary);
		box-shadow: var(--shadow);
	}

	nav {
		display: flex;
	}

	a {
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
		padding: 0.75rem 2rem;
		text-decoration: none;
		color: var(--text-color);
		font-weight: var(--weight-semibold);
		position: relative;
		transition: box-shadow 0.15s;
		border-radius: 99rem;

		&:hover {
			box-shadow: var(--shadow);
		}
	}
</style>
