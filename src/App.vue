<script setup>
import { twJoin as tw } from "tailwind-merge";
import { getCalendarMonthDates } from "./utils/calendar";

/**
 *
 * @param {number} day
 */
function padDay(day) {
	const dayAsString = String(day);
	return dayAsString.length === 2 ? dayAsString : "0" + dayAsString;
}

const days = getCalendarMonthDates({ month: 12, year: 2023 });
</script>

<template>
	<header class="h-9 bg-neutral-bg-subtle"></header>
	<main class="flex h-full flex-col items-center justify-center gap-2">
		<div class="flex flex-col">
			<div class="flex h-9 items-center justify-between">
				<button>Prev</button>
				December 2023
				<button>Next</button>
			</div>
			<div
				:class="
					tw(
						'grid grid-flow-row grid-cols-7',
						'border border-neutral-interactive-border',
					)
				"
			>
				<div
					v-for="day in days"
					:class="
						tw(
							'flex size-9 items-center justify-center',
							day.getMonth() !== 11 && 'text-neutral-text-muted',
						)
					"
				>
					{{ padDay(day.getDate()) }}
				</div>
			</div>
		</div>
	</main>
</template>
