<script lang="ts">
	import { browser } from '$app/environment';
	import type { TwitterShareButtonProps } from '$lib/types';
	import { removeUndefined } from '$lib/utils';

	export let quizTitle: string;
	export let numQuestions: number;
	export let score: number;
	export let props: TwitterShareButtonProps;

	$: scoreText = `I got ${score} out of ${numQuestions} on ${quizTitle}. Can you beat me?`;

	$: text = `${props.startWithScore ? scoreText : ''} ${props.text}`;

	$: url =
		props.alternativeUrl ??
		(props.shareQuizUrl ? (browser ? window.location.href : undefined) : undefined);

	$: searchParams = new URLSearchParams(
		removeUndefined({
			text,
			url,
			hashtags: props.hashtags?.join(','),
			via: props.via,
			related: props.related?.join(',')
		})
	);
</script>

<a
	class="btn btn-primary twitter-share-button sm:mx-0 mx-4"
	href={`https://twitter.com/intent/tweet?${searchParams}`}
>
	Share on Twitter
</a>
