export type Slug = string;

export type Image = {
	src: string;
	alt: string;
};

export type YoutubeVideo = {
	youtubeVideoId: string;
	start?: number;
	end?: number;
	autoplay?: boolean;
};

export type EmbedData = Image | YoutubeVideo;

export type TwitterShareButtonProps = {
	text: string;
	startWithScore?: boolean;
	shareQuizUrl?: boolean;
	alternativeUrl?: string;
	via?: string;
	hashtags?: string[];
	related?: string[];
};

export type QuestionData = {
	embed?: EmbedData;
	question: string;
	answers: string[];
	correctAnswer: number;
	explanation: string;
};

export type ScoreExplanationData = {
	range: [number, number];
	embed?: EmbedData;
	title: string;
	explanation: string;
};

export type QuizData = {
	title: string;
	questions: QuestionData[];
	scoreExplanations: ScoreExplanationData[];
	startButtonText?: string;
	twitterShareButton?: TwitterShareButtonProps;
};

export type QuizThumbnail = {
	slug: Slug;
	title: string;
	description: string;
	image: Image;
};

export type AnswerState = 'correct' | 'incorrect' | 'unanswered' | 'picked' | 'not-picked';

export type PromoState = 'hidden' | 'visible' | 'clicked';
