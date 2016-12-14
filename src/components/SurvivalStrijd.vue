<template>
    <div>
    <p>{{ $t('survivalstrijd.beforeVideo') }}</p>
    <div class="videoWrapper">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/-4O0kaOncew" frameborder="0" allowfullscreen></iframe>
    </div>
    <p>{{ $t('survivalstrijd.afterVideo') }}</p> 
    </div>
</template>

<style>
    .videoWrapper {
	position: relative;
	padding-bottom: 56.25%; /* 16:9 */
	padding-top: 25px;
	height: 0;
}
.videoWrapper iframe {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
</style>